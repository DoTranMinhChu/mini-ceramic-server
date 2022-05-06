const db = require('../models/index')

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

module.exports = {
    getAccounts,
    getAccountByAccount_id,
    getAccountsByRole_id
}