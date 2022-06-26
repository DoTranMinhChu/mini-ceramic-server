const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class CategoryNotExistedException extends AppException {
    constructor() {
        super(StatusCode.CATEGORY_NOT_EXISTED, StatusCodes.BAD_REQUEST);
    }
}