const { Router } = require('../../../config/app');
const {
    // getAllController,
    // getByTagController,
    // getByIdController,
    postNewSellerController,
    putSellerByIdController,
    // deleteSellerByIdController,
} = require('../../../api/composer/seller.compose');

const SellerRouter = Router();

// SellerRouter.get('/seller', getAllController.execute);
// SellerRouter.get('/seller/tag/:id_tag', getByTagController.execute);
// SellerRouter.get('/seller/:id', getByIdController.execute);
SellerRouter.post('/seller', async (req, res) => {
    await postNewSellerController.execute(req, res);
});
SellerRouter.put('/seller/:id', async (req, res) => {
    await putSellerByIdController.execute(req, res);
});

// SellerRouter.delete('/seller/:id', deleteSellerByIdController.execute);

module.exports = SellerRouter;
