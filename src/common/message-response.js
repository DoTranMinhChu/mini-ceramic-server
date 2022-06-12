const StatusCode = require('../constant/status-code');

module.exports = MessageResponse = {
  [StatusCode.BAD_REQUEST]: 'Bad request.',
  [StatusCode.OK]: 'Success.',
  [StatusCode.INVALID_LOGIN_CREDENTIALS]: 'Email or password invalid.',
  [StatusCode.INVALID_CREDENTIALS]: 'Token invalid or expired.',
  [StatusCode.USERNAME_EXISTED]: 'Username existed.',
  [StatusCode.PASSWORD_INCORRECT]: 'Password incorrect.',
  [StatusCode.REGISTER_FAILED]: 'Register failed.',
  [StatusCode.INVALID_REFRESH_TOKEN]: 'Refresh token invalid or expired.'
};