module.exports = {
    newShopSchema: {
        properties: {
            name: {
                type: "string",
                default: "Shop name"
            },
            description: {
                type: "string",
                default: "Shop description"
            },
            address: {
                type: "string",
                default: "Shop address"
            }
        }
    }
}