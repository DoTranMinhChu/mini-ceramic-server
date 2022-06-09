const db = require("../models");
const bcrypt = require('bcrypt');
const config = require('../config/config.json');
const jwt = require('jsonwebtoken');

const createNewAccount = async (data) => {
    const hasPassword = await hasPassword(data.password);
    const newAccount = await db.Accounts.create({
        username: data.username,
        password: hasPassword,
        fullName: data.fullName,
        avatar: data.avatar,
    })
    const { password, ...newAccountRespont } = newAccount.dataValues
    return newAccountRespont;

}

const hasPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}

const loginAccount = async (loginRequest) => {
    const account = await getAccountByUsername(loginRequest.username);
    if (!account) {

    }
    const check = await bcrypt.compareSync(loginRequest.password, account.password);
    if (!check) {

    }
    const { password, ...accountWithoutPassword } = account;
    const accessToken = jwt.sign(
        accountWithoutPassword,
        config.secret,
        {
            expiresIn: '5m'
        }
    );

    return accessToken;

}

const getAccountByUsername = async (username) => {
    return (await db.Accounts.findOne({ where: { username: username } })).dataValues
}

module.exports = {
    createNewAccount,
    loginAccount
}