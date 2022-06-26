const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class ShopNameExistedException extends AppException {
    constructor() {
        super(StatusCode.SHOP_NAME_EXISTED, StatusCodes.BAD_REQUEST);
    }
}