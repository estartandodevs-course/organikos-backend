const User = require('../database/models/user.model');
const {
    createUserAddress,
    findUserAddress,
} = require('../repositories/address.repository');
module.exports = class UserRepository {
    constructor() {}
    async create(user, address) {
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
                    const address_ = await createUserAddress(
                        {
                            street,
                            number,
                            complement,
                            city,
                            state,
                            zipCode,
                        },
                        user.id
                    );
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

    async getById(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            const address_ = await findUserAddress(id);
            return { user, address: address_ };
        } catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        try {
            return `delete seller by id ${id}`;
        } catch (error) {
            throw new Error(error);
        }
    }
};
