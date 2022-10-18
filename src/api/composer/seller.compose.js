const {
    PostNewSellerController,
    PutSellerByIdController,
    GetAllSellerController,
    GetSellerByTagController,
} = require('../controller/seller/index');

const {
    CreateSellerService,
    UpdateSellerService,
    GetAllSellerService,
    GetSellerByTagService,
} = require('../services/seller/index');

const createSellerService = new CreateSellerService();
const updateSellerService = new UpdateSellerService();
const getAllSellerService = new GetAllSellerService();
const getSellerByTagService = new GetSellerByTagService();

const postNewSellerController = new PostNewSellerController(
    createSellerService
);
const putSellerByIdController = new PutSellerByIdController(
    updateSellerService
);
const getAllSellerController = new GetAllSellerController(getAllSellerService);
const getSellerByTagController = new GetSellerByTagController(
    getSellerByTagService
);

module.exports = {
    postNewSellerController,
    putSellerByIdController,
    getAllSellerController,
    getSellerByTagController,
};
