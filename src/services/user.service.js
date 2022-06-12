const bcrypt = require('bcrypt');
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const usersRepository = require('../repository/users.repository');
const tokensRepository = require('../repository/tokens.repository');
const { exceptionResponse } = require('../response/exception.response');
const usernameExistedException = require('../exception/auth/username-existed.exception');
const PasswordIncorrectException = require('../exception/auth/password-incorrect.exception');
const RegisterFailedExistedException = require('../exception/auth/register-failed.exception');
const InvalidRefreshTokenException = require('../exception/auth/invalid-refresh-token.exception');
const createNewUser = async (req, res) => {
    const user = req.body;
    const userExisted = await getUserByUsername(user.username);

    if (UserExisted) {
        return exceptionResponse(res, new usernameExistedException());
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

    const { password, ...newUserRespont } = newUser
    return newUserRespont;

}


const loginUser = async (req, res) => {
    const userAgnet = req.get('User-Agent')
    const loginRequest = {
        username: req.body.username,
        password: req.body.password
    };
    const user = await usersRepository.getUserByUsername(loginRequest.username);
    if (!User) {
        return exceptionResponse(res, new usernameExistedException())
    }
    const check = await bcrypt.compareSync(loginRequest.password, user.password);
    if (!check) {
        return exceptionResponse(res, new PasswordIncorrectException())
    }
    const tokens = await issueTokens(User, userAgnet)
    return tokens;

}

const getUserInfomationByUserId = async (req, res) => {
    const { currentUser } = req;
    const { password, ...userWithoutPassword } = await usersRepository.getUserByUserId(currentUser.id);
    return userWithoutPassword;
}

const renewAccessToken = async (req, res) => {
    const { refreshToken } = req.body;
    const tokenExisted = await tokensRepository.getRefreshTokenById(refreshToken);
    if (!tokenExisted) {
        await tokensRepository.deleteTokenExpireByUserId(refreshToken);
        return exceptionResponse(res, new InvalidRefreshTokenException())
    }
    const { password, ...UserWithoutPassword } = await usersRepository.getUserByUserId(tokenExisted.userId);
    const accessToken = jwt.sign(
        userWithoutPassword,
        config.secret,
        {
            expiresIn: config.accessTokenExpiresIn
        }
    );
    return accessToken;
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

    const refreshToken = await issueRefreshToken(User, agent);
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
    console.log('check')
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}

module.exports = {
    createNewUser,
    loginUser,
    getUserInfomationByUserId,
    renewAccessToken,
}