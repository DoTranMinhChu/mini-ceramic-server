const express = require('express');
const orderService = require('../services/orders.service')
const router = express.Router();
const auth = require('../middleware/auth.middleware');

/**
 * @swagger
 * /api/orders:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Orders
 *     description: Create new orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:      
 *           schema:
 *             type: array
 *             items:
 *               allOf:
 *                 - $ref: '#/components/schemas/newOrdersSchema'  
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.post('/orders', auth,
    createNewOrders = async (req, res) => {

        const createNewOrdersResponse = await orderService.createNewOrders(req, res);
        return createNewOrdersResponse;
    }
)

/**
 * @swagger
 * /api/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Orders
 *     description: Create new orders
 *     parameters:
 *       - in: query
 *         name: perPage
 *         schema:
 *           $ref: '#/components/schemas/perPageSchema'
 *       - in: query
 *         name: page
 *         schema:
 *           $ref: '#/components/schemas/pageSchema'
 *       - in: query
 *         name: orderBy
 *         schema:
 *           $ref: '#/components/schemas/ordersOrderBySchema'
 *       - in: query
 *         name: sort
 *         schema:
 *           $ref: '#/components/schemas/sortSchema'
 *       - in: query
 *         name: paid
 *         schema:
 *           $ref: '#/components/schemas/trueFalseSchema'
 *       - in: query
 *         name: status
 *         schema:
 *           $ref: '#/components/schemas/orderStatusSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/orders', auth,
    createNewOrders = async (req, res) => {
        const createNewOrdersResponse = await orderService.getOrders(req, res);
        return createNewOrdersResponse;
    }
)

/**
 * @swagger
 * /api/orders/pay/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Orders
 *     description: Create new orders
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           $ref: '#/components/schemas/idSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.post('/orders/pay/:id', auth,
    paymentOrder = async (req, res) => {
        const createNewOrdersResponse = await orderService.paymentOrder(req, res);
        return createNewOrdersResponse;
    }
)


/**
 * @swagger
 * /api/orders/status/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Orders
 *     description: Create new orders
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           $ref: '#/components/schemas/idSchema'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateStatusSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.patch('/orders/status/:id', auth,
    paymentOrder = async (req, res) => {
        const createNewOrdersResponse = await orderService.updateStatus(req, res);
        return createNewOrdersResponse;
    }
)

module.exports = router;