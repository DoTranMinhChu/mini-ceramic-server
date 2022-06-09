const express = require('express');
const AccountStatusesController = require('../controllers/accountStatuses.controller');

const router = express.Router();

/**
 * @swagger
 * /api/account-statuses:
 *   get:
 *     tags:
 *       - Account Statuses
 *     description: Get all account statuses 
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/account-statuses',AccountStatusesController.getAccountStatuses)

/**
 * @swagger
 * /api/account-statuses/{_id}:
 *   get:
 *     tags:
 *       - Account Statuses
 *     description: get account statuses by _id
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: get account statuses by _id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */
router.get('/account-statuses/:_id',AccountStatusesController.getAccountStatusbyStatus_id)


module.exports = router;