const GetAllSellerController = require('./getAll.controller');
const GetSellerByTagController = require('./getByTag.controller');
const GetSellerByIdController = require('./getById.controller');
const PostNewSellerController = require('./postNewSeller.controller');
const PutSellerByIdController = require('./putSellerById.controller');
const DeleteSellerByIdController = require('./deleteSellerById.controller');

const getAllController = new GetAllSellerController();
const getByTagController = new GetSellerByTagController();
const getByIdController = new GetSellerByIdController();
const postNewSellerController = new PostNewSellerController();
const putSellerByIdController = new PutSellerByIdController();
const deleteSellerByIdController = new DeleteSellerByIdController();

module.exports = {
    getAllController,
    getByTagController,
    getByIdController,
    postNewSellerController,
    putSellerByIdController,
    deleteSellerByIdController,
};
