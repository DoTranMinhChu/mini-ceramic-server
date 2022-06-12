const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class LogoutFailedExistedException extends AppException {
    constructor() {
        super(StatusCode.LOGOUT_FAILED, StatusCodes.BAD_REQUEST);
    }
}