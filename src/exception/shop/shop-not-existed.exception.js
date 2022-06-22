const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class shopNotExistedException extends AppException {
    constructor() {
        super(StatusCode.SHOP_NOT_EXISTED, StatusCodes.BAD_REQUEST);
    }
}