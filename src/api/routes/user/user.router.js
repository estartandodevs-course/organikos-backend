const { Router } = require('../../../config/app');

const UserRouter = Router();

UserRouter.get('/user', async (req, res) => {
    res.send('Get Users');
});
UserRouter.get('/user/:id', async (req, res) => {
    res.send('Get user by id');
});
UserRouter.post('/user', (req, res) => {
    res.send('Create user');
});
UserRouter.put('/user', (req, res) => {
    res.send('Update user');
});
UserRouter.delete('/user/:id', (req, res) => {
    res.send('Delete user');
});

module.exports = UserRouter;
