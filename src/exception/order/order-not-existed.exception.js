const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class OrderNotExistedException extends AppException {
    constructor() {
        super(StatusCode.ORDER_NOT_EXISTED, StatusCodes.BAD_REQUEST);
    }
}