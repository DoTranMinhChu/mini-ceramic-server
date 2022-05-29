const express = require('express');
const OrdersController = require('../../controllers/Orders.Controller');

const router = express.Router();

/**
 * @swagger
 * /api/orders:
 *   get:
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/orders', OrdersController.getOrders)

/**
 * @swagger
 * /api/orders/{_id}:
 *   get:
 *     tags:
 *       - Orders
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: get Order By Order _id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/orders/:_id', OrdersController.getOrderByOrder_id)

/**
 * @swagger
 * /api/orders/account/{_id}:
 *   get:
 *     tags:
 *       - Orders
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: get Orders By Account _id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/orders/account/:_id', OrdersController.getOrdersByAccount_id)

/**
 * @swagger
 * /api/orders/shop/{_id}:
 *   get:
 *     tags:
 *       - Orders
 *     description: Get order by _id
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: description id of routeInfo
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/orders/shop/:_id', OrdersController.getOrdersByShop_id)


module.exports = router;