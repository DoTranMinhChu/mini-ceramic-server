const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class OnwerShopCanNotOrderException extends AppException {
    constructor() {
        super(StatusCode.OWNER_SHOP_CAN_NOT_ORDER, StatusCodes.BAD_REQUEST);
    }
}