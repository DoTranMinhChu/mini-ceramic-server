const db = require('../models/index')

const getOrders = async (req, res) => {
    const accounts = await db.Orders.findAll({
        include: [
            {
                model: db.Accounts
            },
            {
                model: db.Shops
            },
            {
                model: db.OrderStatuses
            }

        ]
    });
    res.status(200).json(accounts)
}

const getOrderByOrder_id = async (req, res) => {
    const { _id } = req.params
    console.log(req)
    const accounts = await db.Orders.findOne({
        where: {
            _id: _id
        },
        include: [
            {
                model: db.Accounts
            },
            {
                model: db.Shops
            },
            {
                model: db.OrderStatuses
            }

        ]
    });
    res.status(200).json(accounts)
}

const getOrdersByAccount_id = async (req, res) => {
    const { _id } = req.params
    const accounts = await db.Orders.findAll({
        include: [
            {
                model: db.Accounts,
                where: {
                    _id: _id
                },
            },
            {
                model: db.Shops
            },
            {
                model: db.OrderStatuses
            }

        ]
    });
    res.status(200).json(accounts)
}
const getOrdersByShop_id = async (req, res) => {
    const { _id } = req.params
    const accounts = await db.Orders.findAll({
        include: [
            {
                model: db.Accounts

            },
            {
                model: db.Shops,
                where: {
                    _id: _id
                }
            },
            {
                model: db.OrderStatuses
            }

        ]
    });
    res.status(200).json(accounts)
}

module.exports = {
    getOrders,
    getOrderByOrder_id,
    getOrdersByAccount_id,
    getOrdersByShop_id
}