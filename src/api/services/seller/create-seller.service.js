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
                certificate,
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
            const cert = certificate ? 1 : 0;

            const paymentToString = payment.join();
            const distributionToString = distribution.join();
            const categoryToString = category.join();

            const { seller, address_ } = await this.repository.create(
                {
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
                    certificate: cert,
                },
                address
            );
            console.log(seller);
            return {
                id: seller.id,
                name: seller.name,
                email: seller.email,
                phone: seller.phone,
                desc: seller.desc,
                address: {
                    street: address_.street,
                    number: address_.number,
                    complement: address_.complement,
                    city: address_.city,
                    state: address_.state,
                    zipCode: address_.zip_code,
                    country: address_.country,
                },
                payment: seller.payment.split(','),
                delivery: seller.delivery.split(','),
                tag: seller.tag.split(','),
                wpp: seller.wpp == 1 ? true : false,
                certificate: seller.certificate == 1 ? true : false,
                rating: '5',
            };
        } catch (error) {
            console.log(error);
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
