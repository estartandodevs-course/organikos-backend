const User = require('../database/models/user.model');
const {
    createUserAddress,
    findUserAddress,
    updateUserAddress,
} = require('../repositories/address.repository');
module.exports = class UserRepository {
    constructor() {}
    async create(user, address) {
        try {
            const { userId, name, phone, email, password } = user;
            const { street, number, complement, city, state, zipCode } =
                address;
            if (await this.isRegistered(email))
                throw new Error('User already registered');
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
    async update(user, address) {
        // console.log('user::', user);
        try {
            const id = user.userId;
            const addressParam = address;
            return User.update(
                { name: user.name, phone: user.phone, email: user.email },
                {
                    where: {
                        id: user.userId,
                    },
                }
            )
                .then(async () => {
                    await updateUserAddress(addressParam, id);
                    const { user, address } = await this.getById(id);
                    return {
                        user: user.dataValues,
                        address_: address.dataValues,
                    };
                })
                .catch((error) => {
                    throw new Error(error);
                });
        } catch (error) {
            throw new Error(error);
        }
    }

    async getByEmail(email) {
        return User.findOne({
            where: {
                email: email,
            },
        })
            .then(async (user) => {
                const addressRaw = await findUserAddress(user.id);
                const address = {
                    street: addressRaw.street,
                    number: addressRaw.number,
                    complement: addressRaw.complement,
                    city: addressRaw.city,
                    state: addressRaw.state,
                    zipCode: addressRaw.zip_code,
                };

                return { user, address };
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
    async delete(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error('User not found');
            await User.destroy({
                where: {
                    id: id,
                },
            });
        } catch (error) {
            throw new Error(error);
        }
    }

    async isRegistered(email) {
        const user = await User.findOne({
            where: {
                email: email,
            },
        });
        if (user) return true;
        return false;
    }
};
