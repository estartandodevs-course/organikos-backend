module.exports = class UpdateUserService {
    constructor(repository) {
        this.repository = repository;
    }
    async update(params) {
        try {
            const { name, phone, email, password, address } = params;

            // const { city, state, country, street, number, zipCode } =
            //     params.address;

            if (!name) throw new Error('Missing name');
            if (!phone) throw new Error('Missing phone');
            if (!email) throw new Error('Missing email');
            if (!password) throw new Error('Missing password');
            if (!address) throw new Error('Missing address');

            return 'user';
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
