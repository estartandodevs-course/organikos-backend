const {
    GetUserByIdController,
    PostNewUserController,
} = require('../controller/user/index');

const {
    GetUserByIdService,
    CreateUserService,
} = require('../services/user/index');

const UserRepository = require('../repository/user.repository');
const userRepository = new UserRepository();

const getUserByIdService = new GetUserByIdService(userRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdService);

const createUserService = new CreateUserService(userRepository);
const postNewUserController = new PostNewUserController(createUserService);

module.exports = {
    getUserByIdController,
    postNewUserController,
};
