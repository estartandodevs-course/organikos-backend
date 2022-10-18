const {
    PostNewSellerController,
    PutSellerByIdController,
} = require('../controller/seller/index');
const {
    CreateSellerService,
    UpdateSellerService,
} = require('../services/seller/index');

const createSellerService = new CreateSellerService();
const postNewSellerController = new PostNewSellerController(
    createSellerService
);

const updateSellerService = new UpdateSellerService();
const putSellerByIdController = new PutSellerByIdController(
    updateSellerService
);

module.exports = { postNewSellerController };
