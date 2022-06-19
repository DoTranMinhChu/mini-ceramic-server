const jwt = require('jsonwebtoken');
const { secret } = require('../config/config.json');
const InvalidCredentialsException = require('../exception/auth/invalid-credentials.exception');
const { exceptionResponse } = require('../response/exception.response');


const role = (roles) => async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const currentUser = jwt.verify(token, secret, (err, payload) => {
            if (!roles.includes(payload?.role) || err) {
                throw new exceptionResponse()
            }
            return payload;
        })
        req.currentUser = currentUser;
        next();

    } catch (error) {
        return exceptionResponse(res, new InvalidCredentialsException())
    }

}
module.exports = role;
