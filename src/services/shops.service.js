const shopsRepository = require('../repository/shops.repository');
const { NewShopRequest } = require('../request/new-shop.request');
const { exceptionResponse } = require('../response/exception.response');
const shopNameExistedException = require('../exception/shop/shop-name-existed.exception');
const { pagingRequest } = require('../request/paging.request');
const { CommonRequest } = require('../request/common.request');
const { pagingResponse, metaData } = require('../response/httpPaging.resonse');
const { httpResponse } = require('../response/http.response');

const createShop = async (req, res) => {
    const currentUser = req.currentUser;
    const newShopRequest = new NewShopRequest(req.body);
    const shopNameExsited = await shopsRepository.findShopByShopName(newShopRequest.name);
    if (shopNameExsited) {
        return exceptionResponse(res, new shopNameExistedException());
    }
    const createShopResponse = await shopsRepository.createShop(currentUser.id, newShopRequest);
    return httpResponse(res, createShopResponse);
}


const getAllShop = async (req, res) => {

    let { page, perPage } = new CommonRequest(req.query);
    page = page ? page : 1;
    const getShopReponse = await shopsRepository.findAll(perPage * (page - 1), perPage);
    const total = await shopsRepository.countAll()
    return pagingResponse(res, getShopReponse, metaData(page, perPage, total))
}


module.exports = {
    createShop,
    getAllShop
}