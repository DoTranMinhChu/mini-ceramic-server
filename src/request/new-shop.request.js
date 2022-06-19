const NewShopRequest = class {
    constructor(request) {
        const { name, description, address } = request
        this.name = name;
        this.description = description;
        this.address = address
    }
}

module.exports = {
    NewShopRequest
}