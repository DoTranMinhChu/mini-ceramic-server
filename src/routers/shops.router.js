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



module.exports = router;