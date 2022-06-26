const { NewProductRequest } = require("../request/new-product.request");
const { CommonRequest } = require("../request/common.request");
const { pagingResponse, metaData } = require("../response/httpPaging.resonse");
const { httpResponse } = require("../response/http.response");
const { removeUndefinedFieldsFromObject } = require("./common.service");
const productsRepository = require("../repository/products.repository");
const shopsRepository = require("../repository/shops.repository");
const categoriesRepository = require("../repository/categories.repository");
const usersRepository = require("../repository/users.repository");
const { exceptionResponse } = require("../response/exception.response");
const { UpdateProductRequest } = require("../request/update-product.request");
const UserNotExistedException = require("../exception/auth/user-not-existed.exception");
const ShopNotExistedException = require("../exception/shop/shop-not-existed.exception");
const CategoryNotExistedException = require("../exception/category/category-not-existed.exception");
const NotOwnerShopException = require("../exception/shop/not-owner-shop.exception");
const ProductNotExistedException = require("../exception/product/product-not-existed.exception")


const createProduct = async (req, res) => {
    const currentUser = req.currentUser;
    const userId = currentUser.id;
    const newProductRequest = new NewProductRequest(req.body);
    const { shopId, categoryId } = newProductRequest;

    const userExisted = await usersRepository.findOne({
        id: userId
    });
    if (!userExisted) {
        return exceptionResponse(res, new UserNotExistedException());
    }

    const shopExisted = await shopsRepository.findOne({
        id: shopId
    });
    if (!shopExisted) {
        return exceptionResponse(res, new ShopNotExistedException());
    }
    const cateExisted = await categoriesRepository.findOne({
        id: categoryId
    })
    if (!cateExisted) {
        return exceptionResponse(res, new CategoryNotExistedException());
    }
    if (shopExisted.ownerId !== userId) {
        return exceptionResponse(res, new NotOwnerShopException());
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
        return exceptionResponse(res, new ProductNotExistedException());
    }

    const cateExisted = await categoriesRepository.findOne({
        id: categoryId
    })

    if (!cateExisted) {
        return exceptionResponse(res, new CategoryNotExistedException());
    }

    const shopExisted = await shopsRepository.findOne({
        id: productExisted.shopId
    });
    if (!shopExisted) {
        return exceptionResponse(res, new ShopNotExistedException());
    }
    if (shopExisted.ownerId !== userId) {
        return exceptionResponse(res, new NotOwnerShopException());
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