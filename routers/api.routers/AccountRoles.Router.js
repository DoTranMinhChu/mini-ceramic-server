const express = require('express');
const AccountRolesController = require('../../controllers/AccountRoles.Controller');

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
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

module.exports = router;