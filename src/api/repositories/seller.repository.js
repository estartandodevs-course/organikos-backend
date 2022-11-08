const Seller = require('../database/models/seller.model');
const {
    findSellerAddress,
    createSellerAddress,
} = require('./address.repository');

module.exports = class SellerRepository {
    constructor() {}
    async create(
        {
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
        },
        _address
    ) {
        // console.log(_address);
        try {
            let address_;

            const seller = Seller.create({
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
                rating: 5,
            }).then(async (seller) => {
                address_ = await createSellerAddress(_address, seller.id);
                console.log(seller, address_);
                return await { seller, address_ };
            });

            return await seller;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            // const address = await Address.findAll();
            // console.log(address);
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
        console.log(id);
        try {
            const seller = await Seller.findByPk(id);
            if (!seller) throw new Error('User not found');
            const address_ = await findSellerAddress(id);
            const address = address_.dataValues;
            return { address, seller };
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
