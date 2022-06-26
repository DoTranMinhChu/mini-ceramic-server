const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class UpdateCategoryFailedException extends AppException {
    constructor() {
        super(StatusCode.UPDATE_CATEGORY_FAILED, StatusCodes.BAD_REQUEST);
    }
}