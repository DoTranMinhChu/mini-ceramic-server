const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

const AccountsRouter = require('./routers/Accounts.Router')
const AccountRolesRouter = require('./routers/AccountRoles.Router')
const OrdersRouter = require('./routers/Orders.Router')
const ProductsRouter = require('./routers/Products.Router')
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use('/api', AccountsRouter)
app.use('/api', AccountRolesRouter)
app.use('/api', OrdersRouter)
app.use('/api', ProductsRouter)
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.listen(PORT, () => {
    console.log(`Example app http://localhost:${PORT}`);
    console.log(`Example app http://localhost:${PORT}/api/accounts`);
    console.log(`Example app http://localhost:${PORT}/api/account-roles`);
    console.log(`Example app http://localhost:${PORT}/api/orders`);
    console.log(`Example app http://localhost:${PORT}/api/products`);
});

module.exports = app;