const db = require('../models/index')

const getAccountStatuses = async (req, res) => {
    const accountStatuses = await db.AccountStatuses.findAll({});
    res.status(200).json(accountStatuses)
}

const getAccountStatusbyStatus_id = async (req, res) => {
    const { _id } = req.params
    const accountStatuses = await db.AccountStatuses.findOne({
        where: {
            _id: _id
        },
    });
    res.status(200).json(accountStatuses)
}

module.exports = {
    getAccountStatuses,
    getAccountStatusbyStatus_id
}