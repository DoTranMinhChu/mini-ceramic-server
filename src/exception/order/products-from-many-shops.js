const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class ProductsFromManyShopsException extends AppException {
    constructor() {
        super(StatusCode.PRODUCTS_FROM_MANY_SHOPS, StatusCodes.BAD_REQUEST);
    }
}