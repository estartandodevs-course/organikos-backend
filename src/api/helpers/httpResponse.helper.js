const MissingParamsError = require('./missingParams-error');

module.exports = class HttpResponse {
    static badRequest(paramName, httpRequest) {
        return {
            statusCode: 400,
            err: new MissingParamsError(paramName),
            body: httpRequest.body,
        };
    }

    static serverError() {
        return {
            statusCode: 500,
        };
    }

    static created(httpRequest) {
        return {
            body: httpRequest.body,
            statusCode: 201,
        };
    }

    static searched(httpResponse) {
        return {
            body: httpResponse.params,
            statusCode: 200,
        };
    }
};
