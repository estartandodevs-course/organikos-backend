const generateId = require('../../helpers/id-generator.helper');

module.exports = class CreateUserService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(params) {
        try {
            const { name, phone, email, password, address } = params;

            if (!name) throw new Error('Missing name');
            if (!phone) throw new Error('Missing phone');
            if (!email) throw new Error('Missing email');
            if (!password) throw new Error('Missing password');
            // if (!address) throw new Error('Missing address');

            const { user, address_ } = await this.repository.create(
                {
                    userId: generateId(),
                    name,
                    phone,
                    email,
                    password,
                },
                address
            );
            return {
                id: user.id,
                name: user.name,
                phone: user.phone,
                email: user.email,
                address: {
                    street: address_.street,
                    number: address_.number,
                    complement: address_.complement,
                    city: address_.city,
                    state: address_.state,
                    zipCode: address_.zip_code,
                    country: address_.country,
                },
            };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
