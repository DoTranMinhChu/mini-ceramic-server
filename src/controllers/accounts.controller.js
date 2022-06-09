const db = require('../models/index');
const { httpRespone } = require('../response/http.response');
const accountServices = require('../services/account.service')

const getAccounts = async (req, res) => {
    const accounts = await db.Accounts.findAll({
        include: [
            {
                model: db.AccountStatuses
            },
            {
                model: db.AccountRoles
            }
        ]
    });
    res.status(200).json(accounts)
}

const getAccountByAccount_id = async (req, res) => {
    const { _id } = req.params
    const accounts = await db.Accounts.findOne({
        where: {
            _id: _id
        },
        include: [
            {
                model: db.AccountStatuses
            },
            {
                model: db.AccountRoles
            }
        ]
    });
    res.status(200).json(accounts)
}

const getAccountsByRole_id = async (req, res) => {
    const { _id } = req.params
    const accounts = await db.Accounts.findAll({

        include: [
            {
                model: db.AccountStatuses
            },
            {
                model: db.AccountRoles,
                where: {
                    _id: _id
                },
            }
        ]
    });
    res.status(200).json(accounts)
}

const registerAccount = (req, res) => {
    const newAccount = accountServices.createNewAccount(req.body);
    httpRespone(res, newAccount)
}

const loginAccount = async (req, res) => {
    const { username, password } = req.body;
    const loginRequest = { username, password }
    const loginResponse = await accountServices.loginAccount(loginRequest)
    httpRespone(res, loginResponse)
}

module.exports = {
    getAccounts,
    getAccountByAccount_id,
    getAccountsByRole_id,
    registerAccount,
    loginAccount
}