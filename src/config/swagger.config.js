const swaggerJsDoc = require('swagger-jsdoc');

const loginRequest = require('../request/login.request');
const registerRequest = require('../request/register.request');
const refreshTokenRequest = require('../request/refreshToken.request');
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
                loginRequest,
                registerRequest,
                refreshTokenRequest
            }
        },
    },

    apis: ['./src/routers/*.router.js'],
};


module.exports = swaggerJsDoc(swaggerOptions);