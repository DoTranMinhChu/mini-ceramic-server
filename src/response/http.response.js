const statusCode = require('../constant/status-code');
const messageResponse = require('../common/message-response')
const { StatusCodes } = require('http-status-codes');
module.exports = {
    httpResponse: (response, data) => {
        if (data == undefined || data == null) {
            return data;
        }
        response.status(StatusCodes.OK).send({
            statusCode: statusCode.OK,
            message: messageResponse[statusCode.OK],
            data: data
        });
    }
}