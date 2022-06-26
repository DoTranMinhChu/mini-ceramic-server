const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class PaymentFailedException extends AppException {
    constructor() {
        super(StatusCode.PAYMENT_FAILED, StatusCodes.BAD_REQUEST);
    }
}