const { Router } = require('../../config/app');

const ProductRouter = Router();

const {
    getProductBySellerIdController,
    createProductController,
    getProductByNameController,
    getProductByTagController,
    updateProductController,
} = require('../composer/product.compose');

ProductRouter.get('/products?', async (req, res) => {
    getProductByTagController.execute(req, res);
});
ProductRouter.get('/product/:id_seller', async (req, res) => {
    getProductBySellerIdController.execute(req, res);
});
ProductRouter.get('/products/filter?', async (req, res) => {
    getProductByNameController.execute(req, res);
});
ProductRouter.post('/product/:id_seller', async (req, res) => {
    createProductController.execute(req, res);
});
ProductRouter.put('/product/:id', async (req, res) => {
    updateProductController.execute(req, res);
});

module.exports = ProductRouter;
