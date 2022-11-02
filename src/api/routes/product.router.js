const { Router } = require('../../config/app');

const ProductRouter = Router();

const {
    getProductBySellerIdController,
} = require('../composer/product.compose');

ProductRouter.get('/products?', async (req, res) => {
    res.send('Get Products');
});
ProductRouter.get('/product/:id_seller', async (req, res) => {
    getProductBySellerIdController.execute(req, res);
});
ProductRouter.post('/product/:id_seller', (req, res) => {
    res.send('Create product');
});

module.exports = ProductRouter;
