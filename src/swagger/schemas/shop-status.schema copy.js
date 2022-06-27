const { shopStatus, shopStatusDefault } = require("../../constant/shopStatus.enum");

module.exports = {
    shopStatusSchema: {
        type: 'string',
        enum: shopStatus,
        example: shopStatusDefault
    }
}