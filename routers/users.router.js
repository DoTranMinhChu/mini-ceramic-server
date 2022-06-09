const express = require('express');
const userController = require('../controllers/users.controller');
const Role = require('../_helpers/role');
const router = express.Router();

const authorize = require('../_helpers/authorize');
const auth = require('../middleware/auth.middleware');


/**
 * @swagger
 * /api/user/authenticate:
 *   post:
 *     tags:
 *       - Users
 *     description: Login
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       201:
 *         description: New account created!
 */
router.post('/authenticate', userController.authenticate);


/**
 * @swagger
 * /api/user:
 *   get:
 *     securityDefinitions:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A single person
 * 
 */
router.get('/', auth, userController.getAll);


/**
 * @swagger
 * /api/user/{_id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Get all accounts by role _id
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: Role _id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/:_id', authorize(), userController.getById);



module.exports = router;