const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class InvalidLoginCredentialsException extends AppException {
    constructor() {
        super(StatusCode.INVALID_LOGIN_CREDENTIALS, StatusCodes.UNAUTHORIZED);
    }
}