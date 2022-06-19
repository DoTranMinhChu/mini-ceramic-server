
const IdRequest = class {
    constructor(request) {
        console.log(request)
        const { id } = request;
        this.id = id;

    }
}

module.exports = {
    IdRequest
}