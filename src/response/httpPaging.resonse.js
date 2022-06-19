const statusCode = require('../constant/status-code');
const messageResponse = require('../common/message-response')
const { StatusCodes } = require('http-status-codes');

module.exports = {
    metaData: (page, perPage, total) => {
        
        const totalPages = Math.ceil(total / perPage);
        return {
            page: +page,
            perPage: +perPage,
            total: +total,
            totalPages: +totalPages
        }
    },
    pagingResponse: (response, data, metaData) => {
        if (data == undefined || data == null) {
            return data;
        }
        response.status(StatusCodes.OK).send({
            statusCode: statusCode.OK,
            message: messageResponse[statusCode.OK],
            metaData: metaData,
            data: data
        });
    }
}