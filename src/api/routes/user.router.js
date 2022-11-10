const { Router } = require('../../config/app');

const UserRouter = Router();

const {
    getUserByIdController,
    postNewUserController,
    putUserByIdController,
    deleteUserByIdController,
} = require('../composer/user.compose');

const { postNewProductController } = require('../composer/order.compose');

UserRouter.post('/user', async (req, res) => {
    await postNewUserController.execute(req, res);
});
UserRouter.post('/user/login', async (req, res) => {
    await getUserByIdController.execute(req, res);
});
UserRouter.put('/user/:id', async (req, res) => {
    await putUserByIdController.execute(req, res);
});
UserRouter.delete('/user/:id', async (req, res) => {
    await deleteUserByIdController.execute(req, res);
});

UserRouter.post('/order', async (req, res) => {
    await postNewProductController.execute(req, res);
});

module.exports = UserRouter;
