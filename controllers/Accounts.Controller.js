const db = require('../models/index')
const accountServices = require('../services/account.services')

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
    accountServices.createNewAccount(req.body)
        .then(data => {
            console.log('data : ', data)
        }).catch(err => {
            console.log('err : ', err)
        })
}

const loginAccount = (req, res) => {
    accountServices.loginAccount(req.body.username, req.body.password)
        .then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(400).json( err)

        })
}

module.exports = {
    getAccounts,
    getAccountByAccount_id,
    getAccountsByRole_id,
    registerAccount,
    loginAccount
}