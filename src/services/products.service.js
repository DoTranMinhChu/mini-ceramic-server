const { NewProductRequest } = require("../request/new-product.request");
const { CommonRequest } = require("../request/common.request");
const { pagingResponse, metaData } = require("../response/httpPaging.resonse");
const { httpResponse } = require("../response/http.response");
const { removeUndefinedFieldsFromObject } = require("./common.service");
const productsRepository = require("../repository/products.repository");
const shopsRepository = require("../repository/shops.repository");
const categoriesRepository = require("../repository/categories.repository");
const { exceptionResponse } = require("../response/exception.response");
const shopNotExistedException = require("../exception/shop/shop-not-existed.exception");
const notOwnerShopException = require("../exception/shop/not-owner-shop.exception");
const categoryNotExistedException = require("../exception/category/category-not-existed.exception");
const productNotExistedException = require("../exception/product/product-not-existed.exception");
const { UpdateProductRequest } = require("../request/update-product.request");


const createProduct = async (req, res) => {
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const newProductRequest = new NewProductRequest(req.body);
    const { shopId, categoryId } = newProductRequest;
    const shopExisted = await shopsRepository.findOne({
        id: shopId
    });
    const cateExisted = await categoriesRepository.findOne({
        id: categoryId
    })
    if (!shopExisted) {
        return exceptionResponse(res, new shopNotExistedException());
    }
    if (!cateExisted) {
        return exceptionResponse(res, new categoryNotExistedException());
    }
    if (shopExisted.ownerId !== userId) {
        return exceptionResponse(res, new notOwnerShopException());
    }


    const createProductResponse = await productsRepository.createProduct(newProductRequest);
    return httpResponse(res, createProductResponse);
}

const updateProduct = async (req, res) => {
    const productId = new CommonRequest(req.params).id;
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const updateProductRequest = new UpdateProductRequest(req.body);
    const { categoryId } = updateProductRequest;

    const productExisted = await productsRepository.findOne({
        id: productId
    });
    if (!productExisted) {
        return exceptionResponse(res, new productNotExistedException());
    }

    const cateExisted = await categoriesRepository.findOne({
        id: categoryId
    })

    if (!cateExisted) {
        return exceptionResponse(res, new categoryNotExistedException());
    }

    const shopExisted = await shopsRepository.findOne({
        id: productExisted.shopId
    });
    if (!shopExisted) {
        return exceptionResponse(res, new shopNotExistedException());
    }
    if (shopExisted.ownerId !== userId) {
        return exceptionResponse(res, new notOwnerShopException());
    }
    updateProductRequest.shopId = shopExisted.id;
    const updateProductResponse = await productsRepository.updateProduct(productExisted.id, updateProductRequest);
    return httpResponse(res, updateProductResponse);

}

const getAllProducts = async (req, res) => {

    let { page, perPage, shopId, categoryId, orderBy, sort } = new CommonRequest(req.query);
    page = page ? page : 1;
    const where = { shopId, categoryId }
    removeUndefinedFieldsFromObject(where);
    const order = orderBy ? [[orderBy, sort]] : []
    const getProductsReponse = await productsRepository.getAllProducts(
        where,
        order,
        perPage * (page - 1),
        perPage
    );
    const total = await productsRepository.countAll()
    return pagingResponse(res, getProductsReponse, metaData(page, perPage, total))
}

module.exports = {
    createProduct,
    updateProduct,
    getAllProducts
}