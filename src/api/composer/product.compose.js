const ProductRepository = require('../repositories/product.repository');
const repository = new ProductRepository();

const {
    GetProductBySellerIdService,
    CreateProductService,
    GetProductByNameService,
} = require('../services/product/index');

const {
    GetProductBySellerIdController,
    PostNewProductController,
    GetProductByNameController,
} = require('../controllers/product/index');

const getProductBySellerIdService = new GetProductBySellerIdService(repository);
const getProductBySellerIdController = new GetProductBySellerIdController(
    getProductBySellerIdService
);

const createProductService = new CreateProductService(repository);
const createProductController = new PostNewProductController(
    createProductService
);

const getProductByNameService = new GetProductByNameService(repository);
const getProductByNameController = new GetProductByNameController(
    getProductByNameService
);

module.exports = {
    getProductBySellerIdController,
    createProductController,
    getProductByNameController,
};
