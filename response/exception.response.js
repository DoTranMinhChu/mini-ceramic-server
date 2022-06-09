module.exports = {
    exceptionResponse : (response, exception) => {
        response.status(exception.httpCode).send({ statusCode: exception.httpCode, message: exception.message });
        throw exception;
    }
}