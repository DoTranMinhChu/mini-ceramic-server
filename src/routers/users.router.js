const express = require('express');
const auth = require('../middleware/auth.middleware');
const userServices = require('../services/users.service')
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
router.get('/users/info', auth,
    getUserInfo = async (req, res) => {
        const userResponse = await userServices.getUserInfomationByUserId(req, res);
        return userResponse;
    }
)


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
 *             $ref: '#/components/schemas/registerSchema'
 *     responses:
 *       201:
 *         description: New user created!
 * 
 */
router.post('/register',
    registerUser = async (req, res) => {
        const newUserResponse = await userServices.createNewUser(req, res);
        return newUserResponse;
    }
)


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
 *             $ref: '#/components/schemas/loginSchema'
 *     responses:
 *       201:
 *         description: Login responses
 * 
 */
router.post('/login',
    loginUser = async (req, res) => {
        const loginResponse = await userServices.loginUser(req, res);
        return loginResponse;
    }
)


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
 *             $ref: '#/components/schemas/refreshTokenSchema'
 *     responses:
 *       201:
 *         description: Logout response
 * 
 */
router.post('/logout', auth,
    logoutUser = async (req, res) => {
        const logoutResponse = await userServices.logoutUser(req, res);
        return logoutResponse;
    }
)


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
 *             $ref: '#/components/schemas/refreshTokenSchema'
 *     responses:
 *       201:
 *         description: Refresh Token
 * 
 */
router.post('/token',
    issueNewAccessToken = async (req, res) => {
        const newAccessTokenResponse = await userServices.renewAccessToken(req, res);
        return newAccessTokenResponse;

    }
)



module.exports = router;