const NewProductRequest = class {
    constructor(request) {
        const { name, price, description, image, categoryId, shopId } = request;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.categoryId = categoryId;
        this.shopId = shopId;

    }
}

module.exports = {
    NewProductRequest
}