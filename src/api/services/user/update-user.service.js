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
            if (!password) throw new Error('Missing password');
            if (!address) throw new Error('Missing address');

            const user = await this.repository.update({
                userId: id,
                contact: {
                    name,
                    phone,
                    email,
                    password,
                    address,
                },
            });
            return user;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
