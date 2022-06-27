
const { productStatus, productStatusDefault } = require("../../constant/productStatus.enum");

module.exports = {
    productStatusSchema: {
        type: 'string',
        enum: productStatus,
        example: productStatusDefault
    }
}