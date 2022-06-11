const statusCode = require('../constant/status-code');
const messageResponse = require('../common/message-response')
const { StatusCodes } = require('http-status-codes');
module.exports = {
    httpRespone: (response, data) => {
        if (!data) {
            return data;
        }
        response.status(StatusCodes.OK).send({
            statusCode: statusCode.OK,
            message: messageResponse[statusCode.OK],
            data: data
        });
    }
}