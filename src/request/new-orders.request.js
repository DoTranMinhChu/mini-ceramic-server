
const NewOrderRequest = class {
    constructor(request) {
        const { productId, quantity } = request;
        this.productId = productId;
        this.quantity = quantity;
    }
}

const NewOrdersRequest = class {
    constructor(request) {
        const orders = [];
        request.forEach(element => {
            const order = new NewOrderRequest(element);
            if (order.quantity >= 1) {
                orders.push(order);
            }
        });
        this.orders = orders;
    }
}

module.exports = {
    NewOrderRequest,
    NewOrdersRequest
}