const db = require("../models");
const { NewProductRequest } = require("../request/new-product.request");
const { UpdateProductRequest } = require("../request/update-product.request");

const findOne = async (where) => {
    return (await db.Products.findOne({ where: where }))?.dataValues;
}

const createProduct = async (newProductRequest) => {
    const newProduct = new NewProductRequest(newProductRequest);
    return (await db.Products.create({
        name: newProduct.name,
        price: newProduct.price,
        description: newProduct.description,
        image: newProduct.image,
        categoryId: newProduct.categoryId,
        shopId: newProduct.shopId
    }))?.dataValues;

}

const getAllProducts = async (where, order, skip, take) => {
    const listProducts = await db.Products.findAll(
        {
            where: where,
            order: order,
            attributes: ['id', 'name', 'price', 'description', 'image', 'status'],
            include: [
                {
                    model: db.Categories,
                    as: 'category',
                },
                {
                    model: db.Shops,
                    as: 'shop',

                }
            ],
            offset: skip || 0,
            limit: take || null
        }
    )
    return listProducts.map(item => item?.dataValues);
}

const countAll = async (where) => {
    return await db.Products.count(
        {
            where: where,
        }
    )
}


const updateProduct = async (productId, updateProductRequest) => {
    const newInfomation = new UpdateProductRequest(updateProductRequest);
    const updateCategory = await db.Products.update(
        newInfomation,
        {
            where: {
                id: productId
            }
        }
    )
    return !!updateCategory[0];
}
module.exports = {
    findOne,
    createProduct,
    getAllProducts,
    countAll,
    updateProduct
}