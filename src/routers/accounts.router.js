const express = require('express');
const AccountsController = require('../controllers/accounts.controller');
const auth = require('../middleware/auth.middleware');

const router = express.Router();

/**
 * @swagger
 * /api/accounts:
 *   get:
 *     tags:
 *       - Accounts
 *     description: Get all account 
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/accounts', AccountsController.getAccounts)

/**
 * @swagger
 * /api/accounts/{_id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Accounts
 *     description: Get infomation account
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/accounts/info', auth, AccountsController.getAccountByAccount_id)

/**
 * @swagger
 * /api/accounts/{_id}:
 *   get:
 *     tags:
 *       - Accounts
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
router.get('/accounts/role/:_id', AccountsController.getAccountsByRole_id)

/**
 * @swagger
 * /api/register:
 *   post:
 *     tags:
 *       - Accounts
 *     description: Register
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: New account created!
 * 
 */
router.post('/register', AccountsController.registerAccount)

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Accounts
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
 *         description: Login account created!
 * 
 */
router.post('/login', AccountsController.loginAccount)

module.exports = router;