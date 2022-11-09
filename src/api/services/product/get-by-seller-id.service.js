const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class GetProductBySellerIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async getById(id) {
        try {
            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            const product = await this.repository.getById(id);
            const productMap = product.map((product) => {
                return {
                    id: product.id,
                    seller_id: product.id_seller,
                    name: product.name,
                    price: +product.price,
                    quantity: +product.quantity,
                    measure: product.measure,
                    status: product.status == 1 ? true : false,
                    category: product.category,
                };
            });
            return productMap;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
