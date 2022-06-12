const express = require('express');
const usersController = require('../controllers/users.controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();


/**
 * @swagger
 * /api/users/info:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     description: Get infomation user
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/users/info', auth, usersController.getUserInfo)

/**
 * @swagger
 * /api/register:
 *   post:
 *     tags:
 *       - Users
 *     description: Register
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registerRequest'
 *     responses:
 *       201:
 *         description: New user created!
 * 
 */
router.post('/register', usersController.registerUser)

/**
 * @swagger
 * /api/login:
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
 *             $ref: '#/components/schemas/loginRequest'
 *     responses:
 *       201:
 *         description: Login responses
 * 
 */
router.post('/login', usersController.loginUser)

/**
 * @swagger
 * /api/logout:
 *   post:
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     description: Logout
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/refreshTokenRequest'
 *     responses:
 *       201:
 *         description: Logout response
 * 
 */
router.post('/logout', auth, usersController.logoutUser)

/**
 * @swagger
 * /api/token:
 *   post:
 *     tags:
 *       - Users
 *     description: Refresh Token
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/refreshTokenRequest'
 *     responses:
 *       201:
 *         description: Refresh Token
 * 
 */
router.post('/token', usersController.issueNewAccessToken)



module.exports = router;