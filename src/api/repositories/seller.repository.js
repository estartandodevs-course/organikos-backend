const Seller = require('../database/models/seller.model');

module.exports = class SellerRepository {
    constructor() {}
    async create({
        id,
        name,
        email,
        password,
        desc,
        phone,
        payment,
        delivery,
        tag,
        wpp,
        certificate,
    }) {
        try {
            return await Seller.create({
                id,
                name,
                email,
                password,
                desc,
                payment,
                delivery,
                tag,
                wpp,
                phone,
                certificate,
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAll() {
        try {
            return await Seller.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async update() {
        try {
            console.log('update seller');
        } catch (error) {}
    }

    async getByTag() {
        try {
            console.log('get seller by tag');
        } catch (error) {}
    }
    async getById(id) {
        try {
            console.log(id);
            const user = await Seller.findByPk(id);
            if (!user) throw new Error('User not found');
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        try {
            return await Seller.destroy({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw new Error(error);
        }
    }
};
