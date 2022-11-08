const Order_product = require('../database/models/order_product.model');
const Order = require('../database/models/order.model');

module.exports = class OrderRepository {
    async createOrder(order, products) {
        try {
            const orderObj = {
                id_user: order.id_user,
                id_seller: order.id_seller,
                payment: order.payment,
                status: 'pending',
                total_price: order.total_price,
                distribution: order.distribution,
            };

            return Order.create(orderObj)
                .then((order) => {
                    products.forEach((product) => {
                        console.log('order', order);
                        const order_product = {
                            id_order: order.id,
                            id_product: product.id_product,
                            quantity: product.quantity,
                            price: product.price,
                            cost: product.cost,
                        };
                        Order_product.create(order_product);
                    });
                    return order;
                })
                .catch((error) => {
                    console.log(error);
                    throw new Error(error.message);
                });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
};
