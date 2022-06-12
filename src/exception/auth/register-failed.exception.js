const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class RegisterFailedExistedException extends AppException {
    constructor() {
        super(StatusCode.REGISTER_FAILED, StatusCodes.BAD_REQUEST);
    }
}