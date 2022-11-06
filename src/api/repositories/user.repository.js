const User = require('../models/user.model');
const Address = require('../models/address.model');

module.exports = class UserRepository {
    constructor() {}
    async create(user, address) {
        try {
            const { userId, name, phone, email, password } = user;
            const { street, number, complement, city, state, zipCode } =
                address;

            return User.create({
                userId,
                name,
                phone,
                email,
                password,
            })
                .then(async (user) => {
                    const address = await Address.create({
                        userId: user.userId,
                        street,
                        number,
                        complement,
                        city,
                        state,
                        zipCode,
                    });
                    return { user, address };
                })
                .catch((error) => {
                    throw new Error(error);
                });
        } catch (error) {
            throw new Error(error);
        }
    }
    async update() {
        try {
            return 'update seller';
        } catch (error) {}
    }

    async getById() {
        try {
            throw new Error('get seller by id');
        } catch (error) {}
    }
    async delete(id) {
        try {
            return `delete seller by id ${id}`;
        } catch (error) {
            throw new Error(error);
        }
    }
};
