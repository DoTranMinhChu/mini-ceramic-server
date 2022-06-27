const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class UnableChangeStatusOrderDoneException extends AppException {
    constructor() {
        super(StatusCode.UNABLE_CHANGE_STATUS_ORDER_DONE, StatusCodes.BAD_REQUEST);
    }
}