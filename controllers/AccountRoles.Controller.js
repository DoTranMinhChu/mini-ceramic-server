const db = require('../models/index')

const getAccountRoles = async (req, res) => {
    const accountRoles = await db.AccountRoles.findAll({});
    res.status(200).json(accountRoles)
}

const getAccountRoleByRole_id = async (req, res) => {
    const { _id } = req.params
    const accountRoles = await db.AccountRoles.findOne({
        where: {
            _id: _id
        },
    });
    res.status(200).json(accountRoles)
}
const getAccountRoleByRoleName = async (req, res) => {
    const { name } = req.params
    const accountRoles = await db.AccountRoles.findOne({
        where: {
            name: name
        },
    });
    res.status(200).json(accountRoles)
}

module.exports = {
    getAccountRoles,
    getAccountRoleByRole_id,
    getAccountRoleByRoleName
}