const NewCategoryRequest = class {
    constructor(request) {
        const { name } = request
        this.name = name;
    }
}

module.exports = {
    NewCategoryRequest
}