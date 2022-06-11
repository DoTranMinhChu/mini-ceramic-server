const bcrypt = require('bcrypt');
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');
const accountsRepository = require('../repository/accounts.repository');
const tokensRepository = require('../repository/tokens.repository');
const { exceptionResponse } = require('../response/exception.response');
const UsernameExistedException = require('../exception/auth/username-existed.exception');
const createNewAccount = async (user) => {
    const accountExisted = await getAccountByUsername(user.username);

    if (accountExisted) {
        return null;
    }
    const hashPass = await hashPassword(user.password);
    const newAccount = await accountsRepository.createNewAccount({
        username: user.username,
        password: hashPass,
        fullName: user.fullName,
        avatar: user.avatar,
    })

    const { password, ...newAccountRespont } = newAccount
    return newAccountRespont;

}

const hashPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}

const loginAccount = async (req, res) => {
    const userAgnet = req.get('User-Agent')
    const loginRequest = {
        username: req.body.username,
        password: req.body.password
    };
    const account = await getAccountByUsername(loginRequest.username);
    if (!account) {
        return exceptionResponse(res, new UsernameExistedException())
    }
    const check = await bcrypt.compareSync(loginRequest.password, account.password);
    if (!check) {
        return exceptionResponse(res, new PasswordIncorrectException())
    }
    const tokens = await issueTokens(account, userAgnet)
    return tokens;

}

const getAccountByUsername = async (username) => {
    return await accountsRepository.getAccountByUsername(username)
}

const getAccountInfomationByUserId = async (userId) => {
    const { password, ...accountInfomation } = await accountsRepository.getAccountByUserId(userId);
    return accountInfomation;
}

const issueTokens = async (account, agent) => {

    const { password, ...accountWithoutPassword } = account;
    const accessToken = jwt.sign(
        accountWithoutPassword,
        config.secret,
        {
            expiresIn: config.accessTokenExpiresIn
        }
    );

    const refreshToken = await issueRefreshToken(account, agent);
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
module.exports = {
    createNewAccount,
    loginAccount,
    getAccountInfomationByUserId,
}