require('dotenv').config()
const express = require('express');
const swaggerDocs = require('./swagger/swagger.config');
const swaggerUI = require('swagger-ui-express');
const bodyParser = require('body-parser');
const app = express();

const usersRouter = require('./routers/users.router');
const shopsRouter = require('./routers/shops.router');
const categoriesRouter = require('./routers/categories.router');
const productsRouter = require('./routers/products.router');
const ordersRouter = require('./routers/orders.router');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/document', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/api', usersRouter)
app.use('/api', shopsRouter)
app.use('/api', categoriesRouter)
app.use('/api', productsRouter)
app.use('/api', ordersRouter)


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));



const PORT = Process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app http://localhost:${PORT}/api/document`);
});

module.exports = app;