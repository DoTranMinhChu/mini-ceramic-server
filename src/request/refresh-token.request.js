
const RefreshTokenRequest = class {
    constructor(request) {
        const { refreshToken } = request;
        this.refreshToken = refreshToken;
    }
}

module.exports = {

    RefreshTokenRequest
}