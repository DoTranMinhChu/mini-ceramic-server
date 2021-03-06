const jwt = require('jsonwebtoken');
const { secret } = require('../config/config.json');
const InvalidCredentialsException = require('../exception/auth/invalid-credentials.exception');
const { exceptionResponse } = require('../response/exception.response');


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const currentUser = jwt.verify(token, secret, (err, payload) => {
            if (!err) {
                return payload;
            }
            throw new exceptionResponse()
        })
        req.currentUser = currentUser;
        next();

    } catch (error) {
        return exceptionResponse(res, new InvalidCredentialsException())
    }

}
module.exports = auth;
