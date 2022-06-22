module.exports = {
    newProductSchema: {
        properties: {
            name: {
                type: "string",
                default: "Product name"
            },
            price: {
                type: "number",
                default: "10"
            },
            description: {
                type: "string",
                default: "Product description"
            },
            image: {
                type: "string",
                default: "Product image"
            },
            categoryId: {
                type: "string",
                default: "Category id"
            },
            shopId: {
                type: "string",
                default: "Shop id"
            }
        
        }
    }
}