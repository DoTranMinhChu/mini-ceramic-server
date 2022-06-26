const ordersRepository = require('../repository/orders.repository');
const { NewOrdersRequest, NewOrderRequest } = require('../request/new-orders.request');
const usersRepository = require('../repository/users.repository');
const productsRepository = require('../repository/products.repository');
const shopsRepository = require('../repository/shops.repository');
const UserNotExistedException = require('../exception/auth/user-not-existed.exception');
const { exceptionResponse } = require('../response/exception.response');
const OrderEmptyException = require('../exception/order/order-empty.exception');
const ProductsFromManyShopsException = require('../exception/order/products-from-many-shops');
const { httpResponse } = require('../response/http.response');
const OrderFailedException = require('../exception/order/order-failed.exception');
const ShopNotExistedException = require('../exception/shop/shop-not-existed.exception');
const OnwerShopCanNotOrderException = require('../exception/order/onwer-shop-can-not-order.exception');
const { pagingResponse, metaData } = require('../response/httpPaging.resonse');
const { CommonRequest } = require('../request/common.request');
const { removeUndefinedFieldsFromObject } = require('./common.service');
const OrderNotExistedException = require('../exception/order/order-not-existed.exception');

const createNewOrders = async (req, res) => {
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const userExisted = await usersRepository.findOne({
        id: userId
    });
    if (!userExisted) {
        return exceptionResponse(res, new UserNotExistedException());
    }

    const newOrdersRequest = new NewOrdersRequest(req.body);
    if (newOrdersRequest.length <= 0) {
        return exceptionResponse(res, new OrderEmptyException());
    }

    const productExisted = await productsRepository.findOne({ id: newOrdersRequest.orders[0].productId });
    const shopId = productExisted.shopId;
    const shopExisted = await shopsRepository.findOne({ id: shopId });
    if (!shopExisted) {
        return exceptionResponse(res, new ShopNotExistedException());
    }
    const productsFormOneStore = areAllProductsFormOneStore(newOrdersRequest.orders, shopExisted.id);
    if (shopExisted.ownerId === userExisted.id) {
        return exceptionResponse(res, new OnwerShopCanNotOrderException());
    }

    if (!productsFormOneStore) {
        return exceptionResponse(res, new ProductsFromManyShopsException());
    }

    const createOrder = await ordersRepository.createOrder(userId, shopId, newOrdersRequest.orders);
    if (!createOrder) {
        return exceptionResponse(res, new OrderFailedException());
    }
    return httpResponse(res, "Success");

}
const areAllProductsFormOneStore = async (ordersRequest, shopId) => {
    let flag = false;
    const infringingProduct = ordersRequest.filter(async (element) => {
        const order = new NewOrderRequest(element);
        const product = await productsRepository.findOne({ id: order.productId });
        return product.shopId != shopId;
    });
    if (infringingProduct.length > 0) return false;
    return true
}

const getOrders = async (req, res) => {
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const userExisted = await usersRepository.findOne({
        id: userId
    });
    if (!userExisted) {
        return exceptionResponse(res, new UserNotExistedException());
    }

    let { page, perPage, orderBy, sort } = new CommonRequest(req.query);
    page = page ? page : 1;
    const where = { userId: userId }
    removeUndefinedFieldsFromObject(where);
    const order = orderBy ? [[orderBy, sort]] : []

    const getOrders = await ordersRepository.findAll(
        where,
        order,
        perPage * (page - 1),
        perPage
    );
    const total = await ordersRepository.countAll(where)
    return pagingResponse(res, getOrders, metaData(page, perPage, total))
}

const paymentOrder = async (req, res) => {
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const orderId = new CommonRequest(req.params).id;
    const userExisted = await usersRepository.findOne({
        id: userId
    });
    if (!userExisted) {
        return exceptionResponse(res, new UserNotExistedException());
    }
    const orderExisted = await ordersRepository.findOne({
        id: orderId
    });
    if (!orderExisted) {
        return exceptionResponse(res, new OrderNotExistedException());
    }
    const paymentOrder = await ordersRepository.paymentOrder(userId, orderId)
    if (!paymentOrder) {
        return exceptionResponse(res, new OrderFailedException());
    }
    return httpResponse(res, "Success");

}
module.exports = {
    createNewOrders,
    getOrders,
    paymentOrder
}