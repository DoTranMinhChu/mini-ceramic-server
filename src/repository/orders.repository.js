const db = require("../models");
const { NewOrderRequest } = require("../request/new-orders.request");
const orderDetailsRepository = require("./orderDetails.repository");
const productsRepository = require("./products.repository");

const findOne = async (where) => {
    return (await db.Orders.findOne({ where: where }))?.dataValues;
}

const countAll = async (where) => {
    return await db.Orders.count(
        {
            where: where,
        }
    )
}

const findAll = async (where, order, skip, take) => {
    const orders = await db.Orders.findAll(
        {
            where: where,
            order: order,
            attributes: ['id', 'total', 'orderDate', 'shipDate', 'status', 'paid'],
            include: [
                {
                    model: db.Users,
                    as: 'user',
                    attributes: ['id', 'username', 'avatar', 'address', 'fullName'],

                },
                {
                    model: db.Shops,
                    as: 'shop',
                    attributes: ['id', 'name', 'description', 'address', 'status'],
                    include: [{
                        model: db.Users,
                        as: 'owner',
                        attributes: ['id', 'username', 'avatar', 'address', 'fullName'],
                    }],
                },
                {
                    model: db.OrderDetails,
                    as: 'details',
                    attributes: ['id', 'orderId', 'quantity'],
                    include: [{
                        model: db.Products,
                        as: 'product',
                        attributes: ['id', 'name', 'price', 'description', 'image', 'categoryId', 'shopId', 'status'],
                    }],
                }
            ],
            offset: skip || 0,
            limit: take || null
        }
    )
    return orders.map(item => item?.dataValues);
}

const createOrder = async (userId, shopId, newOrdersRequest) => {
    const transaction = await db.sequelize.transaction();
    try {
        const orders = await db.Orders.create({
            total: 0,
            userId: userId,
            shopId: shopId,
            orderDate: new Date()
        }, { transaction: transaction })
        const orderId = orders.id;
        var total = 0;

        for (let element of newOrdersRequest) {
            const newOrderRequest = new NewOrderRequest(element);
            const product = await productsRepository.findOne({ id: newOrderRequest.productId });
            if (!product) throw new Error()
            total = newOrderRequest.quantity * product.price;
            await orderDetailsRepository.createOrderDetail(orderId, product.id, newOrderRequest.quantity, transaction)

        }
        await db.Orders.update(
            {
                total: total
            },
            {
                where: {
                    id: orderId
                },
                transaction: transaction

            }
        )
        await transaction.commit();
        return true;
    } catch (err) {
        console.log(err)
        await transaction.rollback();
        return false
    }
}

const paymentOrder = async (userId, orderId) => {
    const transaction = await db.sequelize.transaction();
    try {
        const order = await db.Orders.findOne(
            {
                where: {
                    id: orderId
                },
                transaction: transaction
            }
        );
        var total = order.total;

        const user = await db.Users.findOne(
            {
                where: {
                    id: userId
                },
                transaction: transaction
            }
        );
        const balance = user.balance;
        const newBlance =  balance - total;
        await db.Users.update(
            {
                balance: newBlance
            },
            {
                where: {
                    id: userId
                },
                transaction: transaction

            }
        )

        await db.Orders.update(
            {
                paid: true
            },
            {
                where: {
                    id: orderId
                },
                transaction: transaction

            }
        )

        await transaction.commit();
        return true;
    } catch (err) {
        console.log(err)
        await transaction.rollback();
        return false
    }
}

module.exports = {
    findAll,
    countAll,
    findOne,
    createOrder,
    paymentOrder
}