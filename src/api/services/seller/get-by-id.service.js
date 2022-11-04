const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class GetSellerByIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async getById(id) {
        try {
            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            const user = await this.repository.getById(id);

            const payment = user.payment.split(',');
            const delivery = user.delivery.split(',');
            const tag = user.tag.split(',');
            const userObj = {
                sellerId: user.id,
                contact: {
                    name: user.name,
                    email: user.email,
                    desc: user.desc,
                    phone: {
                        number: user.phone,
                        isWpp: user.wpp == 1 ? true : false,
                    },
                    address: {},
                    distribution: delivery,
                    payment: payment,
                    category: tag,
                    history: [],
                    rating: '5',
                    certificate: user.certificate == 1 ? true : false,
                },
            };

            console.log(userObj);
            return userObj;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
