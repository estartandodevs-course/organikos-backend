const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class GetSellerByIdService {
    constructor(sellerRepository, productRepository) {
        this.sellerRepository = sellerRepository;
        this.productRepository = productRepository;
    }
    async getById(id) {
        try {
            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            const user = await this.sellerRepository.getById(id);
            const products = await this.productRepository.getById(id);
            const productsMap = products.map((product) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price.toString(),
                    measure: product.measure,
                    status: product.status == 1 ? 'true' : 'false',
                    category: product.category,
                };
            });

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
                },
                distribution: delivery,
                payment: payment,
                category: tag,
                history: [],
                products: productsMap,
                rating: '5',
                certificate: user.certificate == 1 ? true : false,
            };

            return userObj;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
