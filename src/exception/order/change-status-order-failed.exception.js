const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class ChangeStatusOrderFailedException extends AppException {
    constructor() {
        super(StatusCode.CHANGE_STATUS_ORDER_FAILED, StatusCodes.BAD_REQUEST);
    }
}