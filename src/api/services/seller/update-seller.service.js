const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class UpdateSellerService {
    constructor(repository) {
        this.repository = repository;
    }
    async update(params, id) {
        try {
            const {
                name,
                desc,
                phone,
                email,
                password,
                distribution,
                payment,
                category,
                address,
            } = params;

            // const { city, state, country, street, number, zipCode } =
            //     params.address;

            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            if (!name) throw new Error('Missing name');
            if (!desc) throw new Error('Missing desc');
            if (!phone) throw new Error('Missing phone');
            if (!email) throw new Error('Missing email');
            if (!password) throw new Error('Missing password');
            if (!address) throw new Error('Missing address');
            if (!distribution) throw new Error('Missing distribution');
            if (!payment) throw new Error('Missing payment');
            if (!category) throw new Error('Missing category');

            return 'seller';
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
