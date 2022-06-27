
const db = require("../models");
const { NewShopRequest } = require("../request/new-shop.request");

const findOne = async (where) => {
    return (await db.Shops.findOne({ where: where }))?.dataValues;
}


const createShop = async (ownerId, newShopRequest) => {
    const newShop = new NewShopRequest(newShopRequest);
    return (await db.Shops.create({
        name: newShop.name,
        description: newShop.description,
        ownerId: ownerId,
        address: newShop.address
    }))?.dataValues;

}

const getShopByShopName = async (shopName) => {
    return (await db.Shops.findOne({
        where: {
            name: shopName
        }
    }))?.dataValues;
}

const getAllShops = async (where, order, skip, take) => {
    const listShop = await db.Shops.findAll(
        {
            where: where,
            order: order,
            include: [{
                model: db.Users,
                as: 'owner',
                attributes: ['id', 'username', 'avatar', 'address', 'fullName'],
            }],
            offset: skip || 0,
            limit: take || null
        }
    )
    return listShop.map(item => item?.dataValues);
}

const countAll = async () => {
    return await db.Shops.count();
}

module.exports = {
    findOne,
    createShop,
    getShopByShopName,
    getAllShops,
    countAll
}