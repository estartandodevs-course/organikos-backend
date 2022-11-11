// const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class GetUserByIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async getByEmail(email) {
        try {
            // if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            const { user, address } = await this.repository.getByEmail(email);

            return await {
                name: user.name,
                phone: user.phone,
                email: user.email,
                address: {
                    street: address.street,
                    number: address.number,
                    complement: address.complement,
                    city: address.city,
                    state: address.state,
                    zipCode: address.zipCode,
                },
            };
        } catch (error) {
            console.log(error);
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
