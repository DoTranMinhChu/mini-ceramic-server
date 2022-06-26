module.exports = {
    newOrdersSchema: {
        properties: {
            productId: {
                type: "string",
                default: "Product Id"
            },
            quantity: {
                type: "number",
                default: 0
            },
        }
    }
}