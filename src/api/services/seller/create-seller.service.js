const generateId = require('../../helpers/id-generator.helper');

module.exports = class CreateSellerService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(params) {
        try {
            const {
                name,
                desc,
                phone,
                email,
                password,
                address,
                distribution,
                payment,
                category,
            } = params;

            if (!name) throw new Error('Missing name');
            if (!desc) throw new Error('Missing desc');
            if (!phone) throw new Error('Missing phone');
            if (!email) throw new Error('Missing email');
            if (!password) throw new Error('Missing password');
            if (!address) throw new Error('Missing address');
            if (!distribution) throw new Error('Missing distribution');
            if (!payment) throw new Error('Missing payment');
            if (!category) throw new Error('Missing category');

            const user = await this.repository.create({
                sellerId: generateId(),
                contact: {
                    name,
                    desc,
                    phone,
                    email,
                    password,
                },
                address,
                distribution,
                payment,
                category,
            });
            return user;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
