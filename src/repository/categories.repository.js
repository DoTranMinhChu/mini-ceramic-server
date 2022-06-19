
const db = require("../models");

const newCategory = async (newCategory) => {
    return await db.Categories.create(newCategory);
}

const findOne = async (where) => {
    const category = await db.Categories.findOne(
        {
            where:  where
            
        }
    )
    return category?.dataValues
}

const findAll = async (skip, take) => {
    const listCategories = await db.Categories.findAll(
        {
            offset: skip || 0,
            limit: take || null
        }
    )
    return listCategories.map(item => item?.dataValues);
}

const countAll = async () => {
    return await db.Categories.count();
}

const updateCategoryByCategoryId = async (categoryId, newInfomation) => {
    const updateCategory = await db.Categories.update(
        newInfomation,
        {
            where: {
                id: categoryId
            }
        }
    )
    return !!updateCategory[0];

}
module.exports = {
    newCategory,
    findAll,
    countAll,
    findOne,
    updateCategoryByCategoryId

}