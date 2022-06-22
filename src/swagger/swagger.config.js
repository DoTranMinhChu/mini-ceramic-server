const swaggerJsDoc = require('swagger-jsdoc');
const { idSchema } = require('./schemas/id.schema');
const { loginSchema } = require('./schemas/login.schema');
const { newCategorySchema } = require('./schemas/new-category.schema');
const { newProductSchema } = require('./schemas/new-product.schema');
const { newShopSchema } = require('./schemas/new-shop.schema');
const { pagingSchema } = require('./schemas/paging.schema');
const { productOrderBySchema } = require('./schemas/product-order-by.schema');
const { refreshTokenSchema } = require('./schemas/refresh-token.schema');
const { registerSchema } = require('./schemas/register.schema');
const { sortSchema } = require('./schemas/sort.schema');
const { updateProductSchema } = require('./schemas/update-product.schema');

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
                sortSchema,
                productOrderBySchema,
                updateProductSchema,
                perPageSchema: pagingSchema.perPage,
                pageSchema: pagingSchema.page
            }
        },
    },

    apis: ['./src/routers/*.router.js'],
};

module.exports = swaggerJsDoc(swaggerOptions);