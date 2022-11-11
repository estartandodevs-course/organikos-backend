module.exports = class GetProductByTagService {
    constructor(repository) {
        this.repository = repository;
    }
    async getByTag(params) {
        try {
            const product = await this.repository.getByTag(params);
            const productMap = product.map((product) => {
                return {
                    id: product.id,
                    seller_id: product.id_seller,
                    name: product.name,
                    price: +product.price,
                    quantity: +product.quantity,
                    measure: product.measure,
                    url: product.url,
                    status: product.status == 1 ? true : false,
                    category: product.category,
                };
            });
            return productMap;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
