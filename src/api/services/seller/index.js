const CreateSellerService = require('./create-seller.service');
const UpdateSellerService = require('./update-seller.service');
const GetAllSellerService = require('./get-all-seller.service');
const GetSellerByTagService = require('./get-by-tag-id.service');
const GetSellerByIdService = require('./get-by-id.service');
const DeleteSellerService = require('./delete-seller.service');

module.exports = {
    CreateSellerService,
    UpdateSellerService,
    GetAllSellerService,
    GetSellerByTagService,
    GetSellerByIdService,
    DeleteSellerService,
};
