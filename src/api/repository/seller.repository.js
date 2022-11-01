const Seller = require('./models/Seller');

module.exports = class SellerRepository {
    constructor() {}
    async create() {
        try {
            const { name, email } = req.body;
            const seller = await Seller.create({ name, email });
        } catch (error) {}
    }
    async update() {
        try {
            return 'update seller';
        } catch (error) {}
    }
    async getAll() {
        try {
            return [
                {
                    sellerId: '123e4567-e89b-12d3-a456-426614174000',
                    name: 'Horta do seu josé',
                    desc: 'Aqui você encontra os melhores legumes',
                },
            ];
        } catch (error) {}
    }
    async getByTag() {
        try {
            return 'get seller by tag';
        } catch (error) {}
    }
    async getById() {
        try {
            return 'get seller by id';
        } catch (error) {}
    }
    async delete() {
        try {
            return 'delete seller';
        } catch (error) {}
    }
};
