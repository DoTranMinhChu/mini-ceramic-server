const bcrypt = require('bcrypt');
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const usersRepository = require('../repository/users.repository');
const tokensRepository = require('../repository/tokens.repository');
const PasswordIncorrectException = require('../exception/auth/password-incorrect.exception');
const RegisterFailedExistedException = require('../exception/auth/register-failed.exception');
const InvalidRefreshTokenException = require('../exception/auth/invalid-refresh-token.exception');
const LogoutFailedExistedException = require('../exception/auth/logout-failed.exception');
const UserNotExistedException = require('../exception/auth/user-not-existed.exception');
const { LoginRequest } = require('../request/login.request');
const { RefreshTokenRequest } = require('../request/refresh-token.request');
const { httpResponse } = require('../response/http.response');
const { exceptionResponse } = require('../response/exception.response');
const UsernameNotExistedException = require('../exception/auth/username-not-existed.exception');
const UsernameExistedException = require('../exception/auth/username-existed.exception');

const createNewUser = async (req, res) => {
    const user = req.body;
    const userExisted = await usersRepository.getUserByUsername(user.username);
    if (userExisted) {
        return exceptionResponse(res, new UsernameExistedException());
    }
    const hashPass = await hashPassword(user.password);
    const newUser = await usersRepository.createNewUser({
        username: user.username,
        password: hashPass,
        fullName: user.fullName,
        avatar: user.avatar,
    })
    if (!newUser) {
        return exceptionResponse(res, new RegisterFailedExistedException());
    }
    const { password, ...newUserRespont } = newUser;
    return httpResponse(res, newUserRespont);

}


const loginUser = async (req, res) => {
    const userAgnet = req.get('User-Agent');
    const loginRequest = new LoginRequest(req.body);
    const user = await usersRepository.getUserByUsername(loginRequest.username);
    if (!user) {
        return exceptionResponse(res, new UsernameNotExistedException());
    }
    const check = await bcrypt.compareSync(loginRequest.password, user.password);
    if (!check) {
        return exceptionResponse(res, new PasswordIncorrectException());
    }
    const tokens = await issueTokens(user, userAgnet);
    return httpResponse(res, tokens);
}

const logoutUser = async (req, res) => {
    const userAgnet = req.get('User-Agent');
    const currentUser = req.currentUser;
    const { refreshToken } = new RefreshTokenRequest(req.body);
    const logout = await tokensRepository.deleteRefreshTokenById(refreshToken, currentUser.id, userAgnet);
    if (!logout) {
        return exceptionResponse(res, new LogoutFailedExistedException());
    }
    return httpResponse(res, 'Logout sucessfully');
}

const getUserInfomationByUserId = async (req, res) => {
    const { currentUser } = req;
    const userExisted = await usersRepository.getUserByUserId(currentUser.id);
    if (!userExisted) {
        return exceptionResponse(res, new UserNotExistedException());
    }
    const { password, ...userWithoutPassword } = userExisted;
    return httpResponse(res, userWithoutPassword);
}

const renewAccessToken = async (req, res) => {
    const { refreshToken } = new RefreshTokenRequest(req.body);
    const tokenExisted = await tokensRepository.getRefreshTokenById(refreshToken);
    if (!tokenExisted) {
        await tokensRepository.deleteTokenExpireByUserId(refreshToken);
        return exceptionResponse(res, new InvalidRefreshTokenException());
    }
    const { password, ...userWithoutPassword } = await usersRepository.getUserByUserId(tokenExisted.userId);
    const accessToken = jwt.sign(
        userWithoutPassword,
        config.secret,
        {
            expiresIn: config.accessTokenExpiresIn
        }
    );
    return httpResponse(res, accessToken);
}

const issueTokens = async (user, agent) => {

    const { password, ...userWithoutPassword } = user;
    const accessToken = jwt.sign(
        userWithoutPassword,
        config.secret,
        {
            expiresIn: config.accessTokenExpiresIn
        }
    );

    const refreshToken = await issueRefreshToken(user, agent);
    return { accessToken, refreshToken };
}


const issueRefreshToken = async (user, agent) => {

    const refreshToken = await tokensRepository.issueToken(
        user.id,
        config.refreshTokenExpiresIn,
        agent,
    );

    return refreshToken.id;
}

const hashPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}

module.exports = {
    createNewUser,
    loginUser,
    logoutUser,
    getUserInfomationByUserId,
    renewAccessToken,
}