const StatusCode = require('../../constant/status-code');
const AppException  = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class InvalidCredentialsException extends AppException {
        constructor() {

            super(StatusCode.INVALID_CREDENTIALS, StatusCodes.UNAUTHORIZED);
        }
    }