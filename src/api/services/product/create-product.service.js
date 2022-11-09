module.exports = class CreateProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(params, seller_id) {
        try {
            const { name, price, measure, status, category, quantity } = params;

            if (!seller_id) throw new Error('Missing seller_id');
            if (!name) throw new Error('Missing name');
            if (!price) throw new Error('Missing price');
            if (!measure) throw new Error('Missing measure');
            if (!quantity) throw new Error('Missing quantity');
            if (!status) throw new Error('Missing status');
            if (!category) throw new Error('Missing category');

            const productObj = {
                id_seller: seller_id,
                name: name,
                price: +price,
                measure: measure.toLowerCase(),
                quantity: +quantity,
                status: status == true ? 1 : 0,
                category: category.toLowerCase(),
            };

            const product = await this.repository.create(productObj);

            return {
                id: product.id,
                seller_id: product.id_seller,
                name: product.name,
                price: +product.price,
                measure: product.measure,
                quantity: +product.quantity,
                status: product.status == 1 ? true : false,
                category: product.category,
            };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
