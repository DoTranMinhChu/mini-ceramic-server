const express = require('express');
const AccountStatusesController = require('../../controllers/AccountStatuses.Controller');

const router = express.Router();

router.get('/account-statuses',AccountStatusesController.getAccountStatuses)
router.get('/account-status/:_id',AccountStatusesController.getAccountStatusbyStatus_id)


module.exports = router;