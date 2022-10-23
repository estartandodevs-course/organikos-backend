const {
    GetUserByIdController,
    PostNewUserController,
    PutUserByIdController,
} = require('../controller/user/index');

const {
    GetUserByIdService,
    CreateUserService,
    UpdateUserService,
} = require('../services/user/index');

const UserRepository = require('../repository/user.repository');
const userRepository = new UserRepository();

const getUserByIdService = new GetUserByIdService(userRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdService);

const createUserService = new CreateUserService(userRepository);
const postNewUserController = new PostNewUserController(createUserService);

const updateUserService = new UpdateUserService(userRepository);
const putUserByIdController = new PutUserByIdController(updateUserService);

module.exports = {
    getUserByIdController,
    postNewUserController,
    putUserByIdController,
};
