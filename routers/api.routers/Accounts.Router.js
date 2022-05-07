const express = require('express');
const AccountsController = require('../../controllers/Accounts.Controller');

const router = express.Router();

router.get('/accounts',AccountsController.getAccounts)
router.get('/account/:_id',AccountsController.getAccountByAccount_id)
router.get('/accounts/role/:_id',AccountsController.getAccountsByRole_id)

router.post('/register',AccountsController.registerAccount)
router.post('/login',AccountsController.loginAccount)

module.exports = router;