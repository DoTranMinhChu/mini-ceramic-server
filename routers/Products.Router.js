const express = require('express');
const ProductsController = require('../controllers/Products.Controller');

const router = express.Router();

router.get('/products',ProductsController.getProducts)
// router.get('/product/:_id',ProductsController.getOrderByOrder_id)
// router.get('/products/account/:_id',ProductsController.getproductsByAccount_id)
// router.get('/products/shop/:_id',ProductsController.getproductsByShop_id)


module.exports = router;