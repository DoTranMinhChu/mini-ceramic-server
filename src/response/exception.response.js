module.exports = {
    exceptionResponse: (response, exception, print) => {
        try {
            response.status(exception.httpCode).send({ statusCode: exception.httpCode, message: exception.message });
            throw exception;
        } catch (e) {
            if (print != false) {
                console.log(e);
            }
            return;
        }
    }
}