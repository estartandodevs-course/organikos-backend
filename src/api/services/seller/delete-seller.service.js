const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class DeleteSellerService {
    constructor(repository) {
        this.repository = repository;
    }
    async delete(id) {
        try {
            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            return await this.repository.delete(id);
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
