
const pagingRequest = class {
    constructor(request) {
        const { per_page, page } = request
        this.per_page = +per_page;
        this.page = +page;
    }
}

module.exports = {
    pagingRequest
}