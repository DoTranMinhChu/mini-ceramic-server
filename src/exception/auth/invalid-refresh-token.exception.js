const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class InvalidRefreshTokenException extends AppException {
    constructor() {
        super(StatusCode.INVALID_REFRESH_TOKEN, StatusCodes.BAD_REQUEST);
    }
}