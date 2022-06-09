const  MessageResponse  = require('../common/message-response');

module.exports = class AppException extends Error {
  appCode;
  httpCode;

  constructor(appCode, httpCode) {
    super(MessageResponse[appCode]);
    this.appCode = appCode;
    this.httpCode = httpCode;
  }
}