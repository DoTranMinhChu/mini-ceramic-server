const swaggerJsDoc = require('swagger-jsdoc');

const LoginRequest = require('../request/login.request');
const RegisterRequest = require('../request/register.request');

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
                LoginRequest,
                RegisterRequest
            }
        },
    },

    apis: ['./src/routers/*.router.js'],
};


module.exports = swaggerJsDoc(swaggerOptions);