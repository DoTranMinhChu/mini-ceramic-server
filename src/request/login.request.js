const LoginRequest = class {
    constructor(request) {
        const { username, password } = request
        this.username = username;
        this.password = password;
    }
}

module.exports = {
    LoginRequest
}