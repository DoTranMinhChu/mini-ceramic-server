
const CommonRequest = class {
    id;
    ownerId;
    shopId;
    page;
    perPage;
    sort;
    avatar;
    status;
    name;
    email;
    password;
    description;
    address;

    refreshToken;
    asscessToken;
    constructor(request) {
        const key = Object.keys(request)
        key.forEach(key => {
            this[key] = request[key];
        })
    }
}

module.exports = {
    CommonRequest
}