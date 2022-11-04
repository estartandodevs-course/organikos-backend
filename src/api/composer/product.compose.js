const ProductRepository = require('../repositories/product.repository');
const repository = new ProductRepository();

const {
    GetProductBySellerIdService,
    CreateProductService,
    GetProductByNameService,
    GetProductByTagService,
} = require('../services/product/index');

const {
    GetProductBySellerIdController,
    PostNewProductController,
    GetProductByNameController,
    GetProductByTagController,
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

const getProductByTagService = new GetProductByTagService(repository);
const getProductByTagController = new GetProductByTagController(
    getProductByTagService
);

module.exports = {
    getProductBySellerIdController,
    createProductController,
    getProductByNameController,
    getProductByTagController,
};
