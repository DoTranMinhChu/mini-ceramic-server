const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class UnableChangeStatusOrderShippedException extends AppException {
    constructor() {
        super(StatusCode.UNABLE_CHANGE_STATUS_ORDER_SHIPPED, StatusCodes.BAD_REQUEST);
    }
}