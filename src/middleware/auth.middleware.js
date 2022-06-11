const jwt = require('jsonwebtoken');
const { secret } = require('../config/config.json');
const InvalidCredentialsException = require('../exception/auth/invalid-credentials.exception');
const { exceptionResponse } = require('../response/exception.response');

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')

    const currentUser = jwt.verify(token, secret, (err, payload) => {
        if (!err) {
            return payload;
        }

        return null;
    })

    if (!currentUser) {
        return exceptionResponse(res, new InvalidCredentialsException())
    }
    req.currentUser = currentUser;
    next();

}
module.exports = auth;
