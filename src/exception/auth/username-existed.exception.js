const StatusCode = require('../../constant/status-code');
const AppException = require('../app.exception');
const { StatusCodes } = require('http-status-codes');

module.exports = class UsernameExistedException extends AppException {
    constructor() {
        super(StatusCode.USERNAME_EXISTED, StatusCodes.BAD_REQUEST);
    }
}