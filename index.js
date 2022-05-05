const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const db = require('./models/index')
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', async (req, res) => {
    const accounts = await db.Accounts.findAll({
        include: [
            {
                model: db.AccountStatuses
            },
            {
                model: db.AccountRoles
            }
        ]

    });

    res.json(accounts)
})
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.listen(PORT, () => {
    console.log(`Example app http://localhost:${PORT}`);
    console.log(`Example app http://localhost:${PORT}/api/product`);
});

module.exports = app;