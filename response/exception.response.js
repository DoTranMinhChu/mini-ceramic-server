const statusCode = require('../constant/status-code');
const messageResponse = require('../common/message-response')

module.exports = {
    httpRespone: (response, data) => {
        response.status(statusCode.OK).send({
            statusCode: statusCode.OK,
            message: messageResponse[statusCode.OK],
            data: data
        });
    }
}