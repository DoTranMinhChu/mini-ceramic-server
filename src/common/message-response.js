const StatusCode = require('../constant/status-code');

module.exports = MessageResponse = {
  [StatusCode.BAD_REQUEST]: 'Bad request.',
  [StatusCode.OK]: 'Success.',
  [StatusCode.INVALID_LOGIN_CREDENTIALS]: 'Email or password invalid.',
  [StatusCode.INVALID_CREDENTIALS]: 'Token invalid or expired.',
  [StatusCode.USERNAME_EXISTED]: 'Username existed.',
  [StatusCode.PASSWORD_INCORRECT]: 'Password incorrect.',
  [StatusCode.REGISTER_FAILED]: 'Register failed.',
  [StatusCode.INVALID_REFRESH_TOKEN]: 'Refresh token invalid or expired.',
  [StatusCode.LOGOUT_FAILED]: 'Logout failed.',
  [StatusCode.SHOP_NAME_EXISTED]: 'Shop name existed before.',
  [StatusCode.USER_NOT_EXISTED]: 'User not existed.',
  [StatusCode.CATEGORY_NOT_EXISTED]: 'Category not existed.',
  [StatusCode.UPDATE_CATEGORY_FAILED]: 'Category update failed.',
  [StatusCode.SHOP_NOT_EXISTED]: 'Shop not existed.',
  [StatusCode.NOT_OWNER_SHOP]: 'User is not owner of shop.',
  [StatusCode.PRODUCT_NOT_EXISTED]: 'Product not existed.'
};