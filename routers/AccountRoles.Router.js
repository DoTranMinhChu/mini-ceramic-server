const express = require('express');
const AccountRolesController = require('../controllers/AccountRoles.Controller');

const router = express.Router();

router.get('/account-roles',AccountRolesController.getAccountRoles)
router.get('/account-role/id/:_id',AccountRolesController.getAccountRoleByRole_id)
router.get('/account-role/name/:name',AccountRolesController.getAccountRoleByRoleName)

module.exports = router;