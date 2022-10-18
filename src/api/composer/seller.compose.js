const {
    PostNewSellerController,
    PutSellerByIdController,
    GetAllSellerController,
} = require('../controller/seller/index');

const {
    CreateSellerService,
    UpdateSellerService,
    GetAllSellerService,
} = require('../services/seller/index');

const createSellerService = new CreateSellerService();
const updateSellerService = new UpdateSellerService();
const getAllSellerService = new GetAllSellerService();

const postNewSellerController = new PostNewSellerController(
    createSellerService
);
const putSellerByIdController = new PutSellerByIdController(
    updateSellerService
);
const getAllSellerController = new GetAllSellerController(getAllSellerService);

module.exports = {
    postNewSellerController,
    putSellerByIdController,
    getAllSellerController,
};
