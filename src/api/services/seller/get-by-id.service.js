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
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                desc: user.desc,
                payment: payment,
                delivery: delivery,
                tag: tag,
                wpp: user.wpp,
                phone: user.phone,
                certificate: user.certificate,
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
