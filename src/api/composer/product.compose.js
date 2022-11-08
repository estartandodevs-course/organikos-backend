const ProductRepository = require('../repositories/product.repository');
const productRepository = new ProductRepository();

const {
    GetProductBySellerIdService,
    CreateProductService,
    GetProductByNameService,
    GetProductByTagService,
    UpdateProductService,
} = require('../services/product/index');

const {
    GetProductBySellerIdController,
    PostNewProductController,
    GetProductByNameController,
    GetProductByTagController,
    PutProductController,
} = require('../controllers/product/index');

const getProductBySellerIdService = new GetProductBySellerIdService(
    productRepository
);
const getProductBySellerIdController = new GetProductBySellerIdController(
    getProductBySellerIdService
);

const createProductService = new CreateProductService(productRepository);
const createProductController = new PostNewProductController(
    createProductService
);

const getProductByNameService = new GetProductByNameService(productRepository);
const getProductByNameController = new GetProductByNameController(
    getProductByNameService
);

const getProductByTagService = new GetProductByTagService(productRepository);
const getProductByTagController = new GetProductByTagController(
    getProductByTagService
);

const updateProductService = new UpdateProductService(productRepository);
const updateProductController = new PutProductController(updateProductService);

module.exports = {
    getProductBySellerIdController,
    createProductController,
    getProductByNameController,
    getProductByTagController,
    productRepository,
    updateProductController,
};
