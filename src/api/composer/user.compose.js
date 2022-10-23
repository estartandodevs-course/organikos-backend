const { GetUserByIdController } = require('../controller/user/index');

const { GetUserByIdService } = require('../services/user/index');

const UserRepository = require('../repository/user.repository');

const userRepository = new UserRepository();
const getUserByIdService = new GetUserByIdService(userRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdService);

module.exports = {
    getUserByIdController,
};
