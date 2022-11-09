const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class UpdateUserService {
    constructor(repository) {
        this.repository = repository;
    }
    async update(params, id) {
        try {
            const { name, phone, email, password, address } = params;

            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            if (!name) throw new Error('Missing name');
            if (!phone) throw new Error('Missing phone');
            if (!email) throw new Error('Missing email');
            if (!address) throw new Error('Missing address');

            const { user, address_ } = await this.repository.update(
                {
                    userId: id,
                    name,
                    phone,
                    email,
                    password,
                },
                address
            );

            return {
                id: user.id,
                contact: {
                    name: user.name,
                    phone: user.phone,
                    email: user.email,
                },
                address: {
                    street: address_.street,
                    number: address_.number,
                    complement: address_.complement,
                    city: address_.city,
                    state: address_.state,
                    zipCode: address_.zipCode,
                },
            };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
