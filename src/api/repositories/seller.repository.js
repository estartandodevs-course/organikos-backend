const Seller = require('./models/Seller');

module.exports = class SellerRepository {
    constructor() {}
    async create({ name, email }) {
        try {
            await Seller.create({ name, email });
        } catch (error) {}
    }
    async update() {
        try {
            console.log('update seller');
        } catch (error) {}
    }

    async getAll() {
        try {
            console.log([
                {
                    sellerId: '123e4567-e89b-12d3-a456-426614174000',
                    name: 'Horta do seu josé',
                    desc: 'Aqui você encontra os melhores legumes',
                },
            ]);
        } catch (error) {}
    }
    async getByTag() {
        try {
            console.log('get seller by tag');
        } catch (error) {}
    }
    async getById() {
        try {
            console.log('get seller by id');
        } catch (error) {}
    }
    async delete() {
        try {
            console.log('delete seller');
        } catch (error) {}
    }
};
