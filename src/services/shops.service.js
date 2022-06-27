const shopsRepository = require('../repository/shops.repository');
const usersRepository = require('../repository/users.repository');
const ordersRepository = require('../repository/orders.repository');
const { NewShopRequest } = require('../request/new-shop.request');
const { exceptionResponse } = require('../response/exception.response');
const shopNameExistedException = require('../exception/shop/shop-name-existed.exception');
const { CommonRequest } = require('../request/common.request');
const { pagingResponse, metaData } = require('../response/httpPaging.resonse');
const { httpResponse } = require('../response/http.response');
const { removeUndefinedFieldsFromObject } = require('./common.service');
const ShopNotExistedException = require('../exception/shop/shop-not-existed.exception');
const NotOwnerShopException = require('../exception/shop/not-owner-shop.exception');
const UserNotExistedException = require('../exception/auth/user-not-existed.exception');

const createShop = async (req, res) => {
    const currentUser = req.currentUser;
    const newShopRequest = new NewShopRequest(req.body);
    const shopNameExsited = await shopsRepository.getShopByShopName(newShopRequest.name);
    if (shopNameExsited) {
        return exceptionResponse(res, new shopNameExistedException());
    }
    const createShopResponse = await shopsRepository.createShop(currentUser.id, newShopRequest);
    return httpResponse(res, createShopResponse);
}


const getAllShop = async (req, res) => {

    let { page, perPage, status, ownerId } = new CommonRequest(req.query);
    page = page ? page : 1;
    const where = { ownerId, status };
    const order = [];
    removeUndefinedFieldsFromObject(where);
    const getShopReponse = await shopsRepository.getAllShops(where, order, perPage * (page - 1), perPage);
    const total = await shopsRepository.countAll();
    return pagingResponse(res, getShopReponse, metaData(page, perPage, total));
}

const getOrderByShop = async (req, res) => {
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const userExisted = await usersRepository.findOne({
        id: userId
    });
    if (!userExisted) {
        return exceptionResponse(res, new UserNotExistedException());
    }
    const shopId = new CommonRequest(req.params).id;
    const shopExisted = await shopsRepository.findOne({ id: shopId });
    if (!shopExisted) {
        return exceptionResponse(res, new ShopNotExistedException());
    }
    if (shopExisted.ownerId !== userId) {
        return exceptionResponse(res, new NotOwnerShopException());
    }
    let { page, perPage, orderBy, sort, paid, status } = new CommonRequest(req.query);
    page = page ? page : 1;
    const where = { shopId, paid, status }
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
module.exports = {
    createShop,
    getAllShop,
    getOrderByShop
}