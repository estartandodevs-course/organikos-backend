const ProductRepository = require('../repositories/product.repository');
const repository = new ProductRepository();

const { GetProductBySellerIdService } = require('../services/product/index');

const {
    GetProductBySellerIdController,
} = require('../controllers/product/index');

const getProductBySellerIdService = new GetProductBySellerIdService(repository);
const getProductBySellerIdController = new GetProductBySellerIdController(
    getProductBySellerIdService
);

module.exports = {
    getProductBySellerIdController,
};
