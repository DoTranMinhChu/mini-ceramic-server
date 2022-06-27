const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class OrderPaidException extends AppException {
    constructor() {
        super(StatusCode.ORDER_PAID, StatusCodes.BAD_REQUEST);
    }
}