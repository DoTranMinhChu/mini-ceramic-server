const express = require('express');
const OrdersController = require('../controllers/Orders.Controller');

const router = express.Router();

router.get('/orders',OrdersController.getOrders)
router.get('/order/:_id',OrdersController.getOrderByOrder_id)
router.get('/orders/account/:_id',OrdersController.getOrdersByAccount_id)
router.get('/orders/shop/:_id',OrdersController.getOrdersByShop_id)


module.exports = router;