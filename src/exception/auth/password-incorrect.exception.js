const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class PasswordIncorrectException extends AppException {
    constructor() {
        super(StatusCode.PASSWORD_INCORRECT, StatusCodes.BAD_REQUEST);
    }
}