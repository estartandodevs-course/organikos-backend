const {
    PostNewSellerController,
    PutSellerByIdController,
    GetAllSellerController,
    GetSellerByTagController,
    GetSellerByIdController,
} = require('../controller/seller/index');

const {
    CreateSellerService,
    UpdateSellerService,
    GetAllSellerService,
    GetSellerByTagService,
    GetSellerByIdService,
} = require('../services/seller/index');

const createSellerService = new CreateSellerService();
const updateSellerService = new UpdateSellerService();
const getAllSellerService = new GetAllSellerService();
const getSellerByTagService = new GetSellerByTagService();
const getSellerByIdService = new GetSellerByIdService();

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
const getSellerByIdController = new GetSellerByIdController(
    getSellerByIdService
);

module.exports = {
    postNewSellerController,
    putSellerByIdController,
    getAllSellerController,
    getSellerByTagController,
    getSellerByIdController,
};
