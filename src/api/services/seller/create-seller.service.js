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
                // address,
                distribution,
                payment,
                category,
            } = params;

            if (!name) throw new Error('Missing name');
            if (!desc) throw new Error('Missing desc');
            if (!phone) throw new Error('Missing phone');
            if (!email) throw new Error('Missing email');
            if (!password) throw new Error('Missing password');
            // if (!address) throw new Error('Missing address');
            if (!distribution) throw new Error('Missing distribution');
            if (!payment) throw new Error('Missing payment');
            if (!category) throw new Error('Missing category');
            const { number, isWpp } = phone;
            const id = generateId();
            const wwp = isWpp ? 1 : 0;

            const paymentToString = payment.join();
            const distributionToString = distribution.join();
            const categoryToString = category.join();

            const seller = await this.repository.create({
                id: id,
                name: name,
                email: email,
                password: password,
                phone: number,
                desc: desc,
                payment: paymentToString,
                delivery: distributionToString,
                tag: categoryToString,
                wpp: wwp,
            });

            return {
                id: seller.id,
                name: seller.name,
                email: seller.email,
                phone: seller.phone,
                desc: seller.desc,
                payment: seller.payment.split(','),
                delivery: seller.delivery.split(','),
                tag: seller.tag.split(','),
                wpp: seller.wpp == 1 ? true : false,
            };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
