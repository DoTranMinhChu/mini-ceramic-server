
const CommonRequest = class {
    id;
    userId;
    ownerId;
    shopId;
    productId;
    categoryId;
    orderBy;
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
    price;
    paid;
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