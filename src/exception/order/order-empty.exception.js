const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class OrderEmptyException extends AppException {
    constructor() {
        super(StatusCode.ORDER_EMPTY, StatusCodes.BAD_REQUEST);
    }
}