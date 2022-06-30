const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class UsernameNotExistedException extends AppException {
    constructor() {
        super(StatusCode.USERNAME_NOT_EXISTED, StatusCodes.BAD_REQUEST);
    }
}