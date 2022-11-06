const { PostNewProductController } = require('../controllers/order/index');
const { CreateOrderService } = require('../services/order/index');
const OrderRepository = require('../repositories/order.repository');

const orderRepository = new OrderRepository();
const createOrderService = new CreateOrderService(orderRepository);
const postNewProductController = new PostNewProductController(
    createOrderService
);

module.exports = {
    postNewProductController,
};
