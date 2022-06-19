module.exports = {
    loginSchema: {
        properties: {
            username: {
                type: "string",
                default: "username@gmail.com"
            },
            password: {
                type: "string",
                default: "password"
            }
        }
    }
}