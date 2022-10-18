module.exports = class CreateSellerService {
    constructor() {
        console.log('CreateSellerService constructor');
    }
    async create(params) {
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
