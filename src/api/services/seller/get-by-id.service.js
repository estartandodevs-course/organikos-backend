const isValidUUID = require('../../helpers/uuid-validator.helper');
module.exports = class GetSellerByIdService {
    constructor(sellerRepository, productRepository) {
        this.sellerRepository = sellerRepository;
        this.productRepository = productRepository;
    }
    async getById(id) {
        try {
            if (!isValidUUID(id)) throw new Error('Id is not a valid uuid id');
            const { seller, address } = await this.sellerRepository.getById(id);

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

            const payment = seller.payment.split(',');
            const delivery = seller.delivery.split(',');
            const tag = seller.tag.split(',');
            const sellerObj = {
                sellerId: seller.id,
                contact: {
                    name: seller.name,
                    email: seller.email,
                    desc: seller.desc,
                    phone: {
                        number: seller.phone,
                        isWpp: seller.wpp == 1 ? true : false,
                    },
                    address: {
                        city: address.city,
                        state: address.state,
                        country: address.country,
                        street: address.street,
                        number: address.number,
                        complement: address.complement,
                        zipCode: address.zip_code,
                    },
                },
                distribution: delivery,
                payment: payment,
                category: tag,
                history: [],
                products: productsMap,
                rating: '5',
                certificate: seller.certificate == 1 ? true : false,
            };

            return sellerObj;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
