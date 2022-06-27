const { orderStatus, orderStatusDefault } = require("../../constant/orderStatus.enum");

module.exports = {
    orderStatusSchema: {
        type: 'string',
        enum: orderStatus,
        example: orderStatusDefault
    }
}