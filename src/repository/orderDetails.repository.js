const db = require("../models");

const findOne = async (where) => {
    return (await db.OrderDetails.findOne({ where: where }))?.dataValues;
}
const createOrderDetail = async (orderId, productId, quantity, transaction) => {
    return (await db.OrderDetails.create(
        {
            productId: productId,
            quantity: quantity,
            orderId: orderId,
        },
        {
            transaction: transaction
        }
    ));
}
module.exports = {
    findOne,
    createOrderDetail
}