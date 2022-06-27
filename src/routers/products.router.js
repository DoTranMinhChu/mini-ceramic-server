const express = require('express');
const auth = require('../middleware/auth.middleware');
const productService = require('../services/products.service')

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Products
 *     description: Create product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newProductSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.post('/products', auth,
    createProduct = async (req, res) => {
        const createProductResponse = await productService.createProduct(req, res);
        return createProductResponse;
    }
)

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Products
 *     description: Create product
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
 *             $ref: '#/components/schemas/updateProductSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.patch('/products/:id', auth,
    updateProduct = async (req, res) => {
        const createProductResponse = await productService.updateProduct(req, res);
        return createProductResponse;
    }
)


/**
 * @swagger
 * /api/products:
 *   get:
 *     tags:
 *       - Products
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
 *         name: shopId
 *         schema:
 *           $ref: '#/components/schemas/idSchema'
 *       - in: query
 *         name: categoryId
 *         schema:
 *           $ref: '#/components/schemas/idSchema'
 *       - in: query
 *         name: orderBy
 *         schema:
 *           $ref: '#/components/schemas/productOrderBySchema'
 *       - in: query
 *         name: sort
 *         schema:
 *           $ref: '#/components/schemas/sortSchema'
 *       - in: query
 *         name: status
 *         schema:
 *           $ref: '#/components/schemas/productStatusSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/products',
    getProducts = async (req, res) => {
        const getAllProductsResponse = await productService.getAllProducts(req, res);
        return getAllProductsResponse;
    }
)


module.exports = router;