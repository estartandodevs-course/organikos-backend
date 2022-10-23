const { Router } = require('../../config/app');

const UserRouter = Router();

const {
    getUserByIdController,
    postNewUserController,
} = require('../composer/user.compose');

UserRouter.get('/user/:id', async (req, res) => {
    await getUserByIdController.execute(req, res);
});
UserRouter.post('/user', async (req, res) => {
    await postNewUserController.execute(req, res);
});
UserRouter.put('/user/:id', (req, res) => {
    res.send('Update user');
});
UserRouter.delete('/user/:id', (req, res) => {
    res.send('Delete user');
});

module.exports = UserRouter;
