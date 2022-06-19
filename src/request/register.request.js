
const RegisterRequest = class {
    constructor(request) {
        const { username, password, fullName, avatar } = request;
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.avatar = avatar;
    }
}

module.exports = {
    RegisterRequest
}