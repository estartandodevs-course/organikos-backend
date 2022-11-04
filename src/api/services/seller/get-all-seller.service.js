module.exports = class GetAllSellerService {
    constructor(repository) {
        this.repository = repository;
    }
    async getAll() {
        try {
            const users = await this.repository.getAll();
            return users.map((user) => {
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
                    },
                    adress: {},
                    distribution: delivery,
                    payment: payment,
                    category: tag,
                    history: [],
                    rating: '',
                    certificate: user.certificate == 1 ? true : false,
                };
                return userObj;
            });
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 500 })
            );
        }
    }
};
