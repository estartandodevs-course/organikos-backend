const ProductRepository = require('../repositories/product.repository');
const repository = new ProductRepository();

const {
    GetProductBySellerIdService,
    CreateProductService,
} = require('../services/product/index');

const {
    GetProductBySellerIdController,
    PostNewProductController,
} = require('../controllers/product/index');

const getProductBySellerIdService = new GetProductBySellerIdService(repository);
const getProductBySellerIdController = new GetProductBySellerIdController(
    getProductBySellerIdService
);

const createProductService = new CreateProductService(repository);
const createProductController = new PostNewProductController(
    createProductService
);

module.exports = {
    getProductBySellerIdController,
    createProductController,
};
