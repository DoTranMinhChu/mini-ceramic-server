const UsernameExistedException = require('../exception/auth/username-existed.exception');
const db = require('../models/index');
const { exceptionResponse } = require('../response/exception.response');
const { httpRespone } = require('../response/http.response');
const accountServices = require('../services/account.service')

const getAccountInfo = async (req, res) => {
    const currentUser = req.currentUser;
    const accountResponse = await accountServices.getAccountInfomationByUserId(currentUser.id);
    return httpRespone(res, accountResponse);
}

const registerAccount = async (req, res) => {
    const newAccount = await accountServices.createNewAccount(req.body);

    if (!newAccount) {
        return exceptionResponse(res, new UsernameExistedException());
    }
    return httpRespone(res, newAccount)
}

const loginAccount = async (req, res) => {
    const loginResponse = await accountServices.loginAccount(req, res)
    return httpRespone(res, loginResponse)
}

module.exports = {
    getAccountInfo,
    registerAccount,
    loginAccount
}