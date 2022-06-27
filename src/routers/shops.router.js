const express = require('express');
const auth = require('../middleware/auth.middleware');
const shopsService = require('../services/shops.service');

const router = express.Router();

/**
 * @swagger
 * /api/shops:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Shops
 *     description: Create shop
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newShopSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.post('/shops', auth,
    createShop = async (req, res) => {
        const createShopResponse = await shopsService.createShop(req, res);
        return createShopResponse;
    }
)

/**
 * @swagger
 * /api/shops:
 *   get:
 *     tags:
 *       - Shops
 *     description: Get all shops
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
 *         name: ownerId
 *         schema:
 *           $ref: '#/components/schemas/idSchema'
 *       - in: query
 *         name: status
 *         schema:
 *           $ref: '#/components/schemas/shopStatusSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/shops',
    getShop = async (req, res) => {
        const getAllShopsResponse = await shopsService.getAllShop(req, res);
        return getAllShopsResponse;
    }
)

/**
 * @swagger
 * /api/shops/{id}/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Shops
 *     description: Get all shops
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           $ref: '#/components/schemas/idSchema'
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
router.get('/shops/:id/orders', auth,
    getOrderByShop = async (req, res) => {
        const getAllShopsResponse = await shopsService.getOrderByShop(req, res);
        return getAllShopsResponse;
    }
)

module.exports = router;