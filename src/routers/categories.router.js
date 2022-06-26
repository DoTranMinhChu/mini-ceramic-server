const express = require('express')
const role = require('../middleware/role.middleware')
const categoriesService = require('../services/categories.service')
const router = express.Router()

/**
 * @swagger
 * /api/categories:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Categories
 *     description: Create new  categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/newCategorySchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.post('/categories', role("Admin"),
    createNewCategories = async (req, res) => {
        const createNewCategoriesResponse = await categoriesService.createNewCategories(req, res);
        return createNewCategoriesResponse
    }
)

/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags:
 *       - Categories
 *     description: Get all new categories
 *     parameters:
 *       - in: query
 *         name: perPage
 *         schema:
 *           $ref: '#/components/schemas/perPageSchema'
 *       - in: query
 *         name: page
 *         schema:
 *           $ref: '#/components/schemas/pageSchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/categories',
    getAllCategories = async (req, res) => {
        const getAllCategoriesResponse = await categoriesService.getAllCategories(req, res);
        return getAllCategoriesResponse
    }
)


/**
 * @swagger
 * /api/categories/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Categories
 *     description: Get all new categories
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
 *             $ref: '#/components/schemas/newCategorySchema'
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.patch('/categories/:id', role("Admin"),
    updateCategoryByCategoryId = async (req, res) => {
        const updateCategoriesResponse = await categoriesService.updateCategoryByCategoryId(req, res);
        return updateCategoriesResponse;
    }
)


module.exports = router