module.exports = class CreateProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(params, seller_id) {
        try {
            const { name, price, measure, status, category } = params;

            if (!seller_id) throw new Error('Missing seller_id');
            if (!name) throw new Error('Missing name');
            if (!price) throw new Error('Missing price');
            if (!measure) throw new Error('Missing measure');
            if (!status) throw new Error('Missing status');
            if (!category) throw new Error('Missing category');

            const productObj = {
                id_seller: seller_id,
                name: name.toLowerCase(),
                price: +price,
                measure: measure.toLowerCase(),
                status: status,
                category: category.toLowerCase(),
            };

            const product = await this.repository.create(productObj);

            return {
                id: product.id,
                seller_id: product.id_seller,
                name: product.name,
                price: product.price.toString(),
                measure: product.measure,
                status: product.status == 1 ? 'active' : 'inactive',
                category: product.category,
            };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
