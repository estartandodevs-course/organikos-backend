module.exports = class CreateOrderService {
    constructor(repository) {
        this.repository = repository;
    }

    async createOrder(order) {
        // console.log(order);
        try {
            const {
                id_user,
                id_seller,
                payment,
                distribution,
                total_price,
                products,
            } = order;
            if (!id_seller) throw new Error('Missing seller_id');
            if (!id_user) throw new Error('Missing user_id');
            if (!payment) throw new Error('Missing products');
            if (!total_price) throw new Error('Missing total_price');

            const orderObj = {
                id_user: id_user,
                id_seller: id_seller,
                payment: payment,
                status: 'pending',
                total_price: total_price,
                distribution: distribution,
            };

            const order_ = await this.repository.createOrder(
                orderObj,
                products
            );

            return {
                id: order_.id,
                seller_id: order_.id_seller,
                user_id: order_.id_user,
                products: order_.products,
                status: order_.status,
            };
        } catch (error) {
            console.log(error);
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
