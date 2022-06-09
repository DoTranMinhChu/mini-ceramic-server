const jwt = require('jsonwebtoken')
const db = require("../models")
const { secret } = require('../config/config.json');
const InvalidCredentialsException  = require('../exception/auth/invalid-credentials.exception');

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const currentUse = jwt.verify(token, secret, (err, payload) => {
        if (!err) {
            return payload;
        }
        return null
    })


    req.currentUse = currentUse;
    next()

}
module.exports = auth
