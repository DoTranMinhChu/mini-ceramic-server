const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class notOwnerShopException extends AppException {
    constructor() {
        super(StatusCode.NOT_OWNER_SHOP, StatusCodes.BAD_REQUEST);
    }
}