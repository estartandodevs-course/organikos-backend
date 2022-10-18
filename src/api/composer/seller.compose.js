const { PostNewSellerController } = require('../controller/seller/index');
const { CreateSellerService } = require('../services/seller/index');

const createSellerService = new CreateSellerService();
const postNewSellerController = new PostNewSellerController(
    createSellerService
);

module.exports = { postNewSellerController };
