const db = require('../models/index')

const getProducts = async (req, res) => {
    const users = await db.Products.findAll({
        include: [
            {
                model: db.ProductCategories
            },
            {
                model: db.Shops
            },
            {
                model: db.ProductStatuses
            }

        ]
    });
    res.status(200).json(users)
}


module.exports = {
    getProducts,
   
}