module.exports = class UpdateProductService {
    constructor(repository) {
        this.repository = repository;
    }
    async update(params) {
        try {
            const { id, name, price, measure, status, category } = params;

            if (!id) throw new Error('Missing id');
            if (!name) throw new Error('Missing name');
            if (!price) throw new Error('Missing price');
            if (!measure) throw new Error('Missing measure');
            if (!status) throw new Error('Missing status');
            if (!category) throw new Error('Missing category');

            const productObj = {
                id: id,
                name: name,
                price: +price,
                measure: measure.toLowerCase(),
                status: status == true ? 1 : 0,
                category: category.toLowerCase(),
            };

            const product = await this.repository.update(productObj);

            return {
                id: product.id,
                seller_id: product.id_seller,
                name: product.name,
                price: product.price,
                measure: product.measure,
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
