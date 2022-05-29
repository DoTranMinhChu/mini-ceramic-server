const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

const views = require('./routers/view.routers/index')

const AccountsRouter = require('./routers/api.routers/Accounts.Router')
const AccountRolesRouter = require('./routers/api.routers/AccountRoles.Router')
const OrdersRouter = require('./routers/api.routers/Orders.Router')
const ProductsRouter = require('./routers/api.routers/Products.Router')

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Library API",
            version: '1.0.0',
        },
    },
    apis: ['./routers/api.routers/*.Router.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/document', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
const PORT = process.env.PORT || 5000;

app.use('/api', AccountsRouter)
app.use('/api', AccountRolesRouter)
app.use('/api', OrdersRouter)
app.use('/api', ProductsRouter)
app.use('/', views)


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.listen(PORT, () => {
    console.log(`Example app http://localhost:${PORT}`);
    console.log(`Example app http://localhost:${PORT}/api/accounts`);
    console.log(`Example app http://localhost:${PORT}/api/account-roles`);
    console.log(`Example app http://localhost:${PORT}/api/orders`);
    console.log(`Example app http://localhost:${PORT}/api/products`);
    console.log(`Example app http://localhost:${PORT}/api-docs`);
});

module.exports = app;