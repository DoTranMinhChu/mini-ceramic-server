const express = require('express');
const AccountsController = require('../../controllers/Accounts.Controller');

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
 *     tags:
 *       - Accounts
 *     description: Get accounts by account _id
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: Account _id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/accounts/:_id', AccountsController.getAccountByAccount_id)

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
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required:
 *             - fullName
 *             - username
 *             - password
 *             - avatar
 *           properties:
 *             fullName:
 *               type: string
 *             username:
 *               type: string
 *             password:
 *               type: string
 *             avatar:
 *               type: string
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
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       201:
 *         description: New account created!
 * 
 */
router.post('/login', AccountsController.loginAccount)

module.exports = router;