const { Router } = require('../../../config/app');

const ProductRouter = Router();

ProductRouter.get('/product', async (req, res) => {
    res.send('Get Products');
});
ProductRouter.get('/product/:id', async (req, res) => {
    res.send('Get product by id');
});
ProductRouter.post('/product', (req, res) => {
    res.send('Create product');
});
ProductRouter.put('/product', (req, res) => {
    res.send('Update product');
});
ProductRouter.delete('/product/:id', (req, res) => {
    res.send('Delete product');
});

module.exports = ProductRouter;
