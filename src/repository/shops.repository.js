const db = require("../models");
const { NewShopRequest } = require("../request/new-shop.request");

const createShop = async (ownerId, newShopRequest) => {
    const newShop = new NewShopRequest(newShopRequest);
    return (await db.Shops.create({
        name: newShop.name,
        description: newShop.description,
        ownerId: ownerId,
        address: newShop.address
    }))?.dataValues;

}

const findShopByShopName = async (shopName) => {
    return (await db.Shops.findOne({
        name: shopName
    }))?.dataValues;
}

const findAll = async (skip, take) => {
    const listShop = await db.Shops.findAll(
        {
            include: [{
                model: db.Users,
                as: 'owner',
                attributes:['id', 'username', 'avatar', 'address'],
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
    createShop,
    findShopByShopName,
    findAll,
    countAll
}