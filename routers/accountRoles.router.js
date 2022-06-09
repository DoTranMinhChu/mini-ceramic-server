const express = require('express');
const AccountRolesController = require('../controllers/accountRoles.controller');

const router = express.Router();

/**
 * @swagger
 * /api/account-roles:
 *   get:
 *     tags:
 *       - Account Roles
 *     description: Get all account roles
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/account-roles',AccountRolesController.getAccountRoles)

/**
 * @swagger
 * /api/account-role/name/{_id}:
 *   get:
 *     tags:
 *       - Account Roles
 *     description: Get account role by role _id
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
router.get('/account-role/id/:_id',AccountRolesController.getAccountRoleByRole_id)

/**
 * @swagger
 * /api/account-role/name/{name}:
 *   get:
 *     tags:
 *       - Account Roles
 *     description: Get account role by role _id
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Role name
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/account-role/name/:name',AccountRolesController.getAccountRoleByRoleName)

/**
 * @swagger
 * /api/account-role:
 *   post:
 *     tags:
 *       - Account Roles
 *     description: Create new account role
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required:
 *             - name
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       201:
 *         description: New account created!
 * 
 */
 router.post('/account-role',AccountRolesController.createAccountRole)


module.exports = router;