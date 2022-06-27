const swaggerJsDoc = require('swagger-jsdoc');
const { idSchema } = require('./schemas/id.schema');
const { loginSchema } = require('./schemas/login.schema');
const { newCategorySchema } = require('./schemas/new-category.schema');
const { newProductSchema } = require('./schemas/new-product.schema');
const { newShopSchema } = require('./schemas/new-shop.schema');
const { orderStatusSchema } = require('./schemas/order-status.schema');
const { ordersOrderBySchema } = require('./schemas/orders-order-by.schema');
const { newOrdersSchema } = require('./schemas/orders.schema');
const { pagingSchema } = require('./schemas/paging.schema');
const { productOrderBySchema } = require('./schemas/product-order-by.schema');
const { productStatusSchema } = require('./schemas/product-status.schema');
const { refreshTokenSchema } = require('./schemas/refresh-token.schema');
const { registerSchema } = require('./schemas/register.schema');
const { shopStatusSchema } = require('./schemas/shop-status.schema copy');
const { sortSchema } = require('./schemas/sort.schema');
const { trueFalseSchema } = require('./schemas/true-false.schema');
const { updateProductSchema } = require('./schemas/update-product.schema');
const {updateStatusSchema} = require('./schemas/update-status.schema');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: "Library API",
            version: '1.0.0',
        },
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            schemas: {
                idSchema,
                loginSchema,
                registerSchema,
                refreshTokenSchema,
                newShopSchema,
                newCategorySchema,
                newProductSchema,
                orderStatusSchema,
                productStatusSchema,
                shopStatusSchema,
                sortSchema,
                trueFalseSchema,
                productOrderBySchema,
                ordersOrderBySchema,
                updateProductSchema,
                newOrdersSchema,
                updateStatusSchema,
                perPageSchema: pagingSchema.perPage,
                pageSchema: pagingSchema.page
            }
        },
    },

    apis: ['./src/routers/*.router.js'],
};

module.exports = swaggerJsDoc(swaggerOptions);