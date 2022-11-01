const {
    GetUserByIdController,
    PostNewUserController,
    PutUserByIdController,
    DeleteUserByIdController,
} = require('../controllers/user/index');

const {
    GetUserByIdService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
} = require('../services/user/index');

const UserRepository = require('../repositories/user.repository');
const userRepository = new UserRepository();

const getUserByIdService = new GetUserByIdService(userRepository);
const getUserByIdController = new GetUserByIdController(getUserByIdService);

const createUserService = new CreateUserService(userRepository);
const postNewUserController = new PostNewUserController(createUserService);

const updateUserService = new UpdateUserService(userRepository);
const putUserByIdController = new PutUserByIdController(updateUserService);

const deleteUserService = new DeleteUserService(userRepository);
const deleteUserByIdController = new DeleteUserByIdController(
    deleteUserService
);

module.exports = {
    getUserByIdController,
    postNewUserController,
    putUserByIdController,
    deleteUserByIdController,
};
