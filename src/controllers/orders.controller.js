const db = require('../models/index')

const getOrders = async (req, res) => {
    const users = await db.Orders.findAll({
        include: [
            {
                model: db.Users
            },
            {
                model: db.Shops
            },
            {
                model: db.OrderStatuses
            }

        ]
    });
    res.status(200).json(Users)
}

const getOrderByOrder_id = async (req, res) => {
    const { _id } = req.params
    const users = await db.Orders.findOne({
        where: {
            _id: _id
        },
        include: [
            {
                model: db.Users
            },
            {
                model: db.Shops
            },
            {
                model: db.OrderStatuses
            }

        ]
    });
    res.status(200).json(Users)
}

const getOrdersByUser_id = async (req, res) => {
    const { _id } = req.params
    const users = await db.Orders.findAll({
        include: [
            {
                model: db.Users,
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
    res.status(200).json(Users)
}
const getOrdersByShop_id = async (req, res) => {
    const { _id } = req.params
    const users = await db.Orders.findAll({
        include: [
            {
                model: db.Users

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
    res.status(200).json(Users)
}

module.exports = {
    getOrders,
    getOrderByOrder_id,
    getOrdersByUser_id,
    getOrdersByShop_id
}