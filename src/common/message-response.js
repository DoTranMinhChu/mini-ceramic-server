const StatusCode = require('../constant/status-code');

module.exports = MessageResponse = {
  [StatusCode.INVALID_LOGIN_CREDENTIALS]: 'Email or password invalid.',
  [StatusCode.INVALID_CREDENTIALS]: 'Token invalid or expired.',
  [StatusCode.OK]: 'Success.',
  [StatusCode.USERNAME_EXISTED]: 'Username existed.',
  [StatusCode.PASSWORD_INCORRECT]: 'Password incorrect.'
};