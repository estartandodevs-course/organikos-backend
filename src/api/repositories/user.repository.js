const User = require('../database/models/user.model');
const { createUserAddress } = require('../repositories/address.repository');
module.exports = class UserRepository {
    constructor() {}
    async create(user, address) {
        console.log('user', user);
        console.log('address', address);
        try {
            const { userId, name, phone, email, password } = user;
            const { street, number, complement, city, state, zipCode } =
                address;

            return User.create({
                id: userId,
                name,
                phone,
                email,
                password,
            })
                .then(async (user) => {
                    console.log('user', user);
                    const address_ = await createUserAddress({
                        id_users: user.id,
                        street,
                        number,
                        complement,
                        city,
                        state,
                        zipCode,
                    });
                    return { user, address_ };
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
            throw new Error('no implemented');
        } catch (error) {
            throw new Error(error);
        }
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
