const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class OrderFailedException extends AppException {
    constructor() {
        super(StatusCode.ORDER_FAILED, StatusCodes.BAD_REQUEST);
    }
}