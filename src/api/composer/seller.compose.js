const {
    PostNewSellerController,
    PutSellerByIdController,
    GetAllSellerController,
    GetSellerByTagController,
    GetSellerByIdController,
    DeleteSellerByIdController,
} = require('../controller/seller/index');

const {
    CreateSellerService,
    UpdateSellerService,
    GetAllSellerService,
    GetSellerByTagService,
    GetSellerByIdService,
    DeleteSellerService,
} = require('../services/seller/index');

const createSellerService = new CreateSellerService();
const updateSellerService = new UpdateSellerService();
const getAllSellerService = new GetAllSellerService();
const getSellerByTagService = new GetSellerByTagService();
const getSellerByIdService = new GetSellerByIdService();
const deleteSellerService = new DeleteSellerService();

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
const deleteSellerByIdController = new DeleteSellerByIdController(
    deleteSellerService
);

module.exports = {
    postNewSellerController,
    putSellerByIdController,
    getAllSellerController,
    getSellerByTagController,
    getSellerByIdController,
    deleteSellerByIdController,
};
