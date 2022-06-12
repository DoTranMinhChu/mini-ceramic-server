const express = require('express');
const swaggerDocs = require('./config/swagger.config')
const swaggerUI = require('swagger-ui-express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

const usersRouter = require('./routers/users.router')
const OrdersRouter = require('./routers/orders.router')
const ProductsRouter = require('./routers/products.router')

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/document', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
const PORT = process.env.PORT || 5000;

app.use('/api', usersRouter)
app.use('/api', OrdersRouter)
app.use('/api', ProductsRouter) 


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.listen(PORT, () => {
    console.log(`Example app http://localhost:${PORT}/api/document`);
});

module.exports = app;