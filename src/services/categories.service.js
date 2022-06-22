const categoriesRepository = require('../repository/categories.repository')
const { NewCategoryRequest } = require('../request/new-category.request')
const shopsRepository = require('../repository/shops.repository');
const { httpResponse } = require('../response/http.response');
const { CommonRequest } = require('../request/common.request');
const { metaData, pagingResponse } = require('../response/httpPaging.resonse');
const updateCategoryFailedException = require('../exception/category/update-category-faleld.exception');
const categoryNotExistedException = require('../exception/category/category-not-existed.exception');
const { exceptionResponse } = require('../response/exception.response');

const createNewCategories = async (req, res) => {
    const newCategory = new NewCategoryRequest(req.body);
    const newCategoryResponse = await categoriesRepository.newCategory(newCategory);
    httpResponse(res, newCategoryResponse)
}

const getAllCategories = async (req, res) => {
    let { page, perPage } = new CommonRequest(req.query);
    page = page ? page : 1;
    const getAllCategoriesResponse = await categoriesRepository.findAll(perPage * (page - 1), perPage);
    const total = await categoriesRepository.countAll();
    return pagingResponse(res, getAllCategoriesResponse, metaData(page, perPage, total));
}
const updateCategoryByCategoryId = async (req, res) => {
    const { id } = new CommonRequest(req.params);
    const categoryExited = await categoriesRepository.findOne({ id: id });
    if (!categoryExited) {
        return exceptionResponse(res, new categoryNotExistedException())
    }
    const newCategory = new NewCategoryRequest(req.body);
    const newCategoryResponse = await categoriesRepository.updateCategoryByCategoryId(id, newCategory);
    if (!newCategoryResponse) {
        return exceptionResponse(res, new updateCategoryFailedException());
    }

    httpResponse(res, newCategoryResponse ? "Update successfully" : "Update unsuccessfully")
}
module.exports = {
    createNewCategories,
    getAllCategories,
    updateCategoryByCategoryId
}