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

            const user = await this.repository.create(
                {
                    userId: generateId(),
                    name,
                    phone,
                    email,
                    password,
                },
                address
            );
            return user;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
