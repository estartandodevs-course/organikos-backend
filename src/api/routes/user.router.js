const { Router } = require('../../config/app');

const UserRouter = Router();

const {
    getUserByIdController,
    postNewUserController,
    putUserByIdController,
    deleteUserByIdController,
} = require('../composer/user.compose');

UserRouter.get('/user/:id', async (req, res) => {
    await getUserByIdController.execute(req, res);
});
UserRouter.post('/user', async (req, res) => {
    await postNewUserController.execute(req, res);
});
UserRouter.put('/user/:id', async (req, res) => {
    await putUserByIdController.execute(req, res);
});
UserRouter.delete('/user/:id', async (req, res) => {
    await deleteUserByIdController.execute(req, res);
});

module.exports = UserRouter;
