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

const SellerRepository = require('../repository/seller.repository');
const sellerRepository = new SellerRepository();

const createSellerService = new CreateSellerService(sellerRepository);
const updateSellerService = new UpdateSellerService(sellerRepository);
const getAllSellerService = new GetAllSellerService(sellerRepository);
const getSellerByTagService = new GetSellerByTagService(sellerRepository);
const getSellerByIdService = new GetSellerByIdService(sellerRepository);
const deleteSellerService = new DeleteSellerService(sellerRepository);

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
