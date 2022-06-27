const StatusCode = require('../../constant/status-code');
const AppException  = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class InsufficientPremissionException extends AppException {
        constructor() {
            super(StatusCode.INSUFFICIENT_PREMISSIONS, StatusCodes.UNAUTHORIZED);
        }
    }