const { Router } = require('../../config/app');
const {
    getAllSellerController,
    postNewSellerController,
    putSellerByIdController,
    getSellerByTagController,
    getSellerByIdController,
    deleteSellerByIdController,
} = require('../composer/seller.compose');

const SellerRouter = Router();

SellerRouter.get('/seller', async (req, res) => {
    await getAllSellerController.execute(req, res);
});
SellerRouter.get('/seller/tag/:id_tag', async (req, res) => {
    await getSellerByTagController.execute(req, res);
});
SellerRouter.get('/seller/:id', async (req, res) => {
    await getSellerByIdController.execute(req, res);
});
SellerRouter.post('/seller', async (req, res) => {
    await postNewSellerController.execute(req, res);
});
SellerRouter.put('/seller/:id', async (req, res) => {
    await putSellerByIdController.execute(req, res);
});

SellerRouter.delete('/seller/:id', async (req, res) => {
    await deleteSellerByIdController.execute(req, res);
});

module.exports = SellerRouter;
