const Product = require('../database/models/product.model');

module.exports = class ProductRepository {
    constructor() {}
    async create(data) {
        try {
            const { id, name, price, measure, status, category } = data;
            const product = {
                id_seller: id,
                name: name,
                price,
                measure,
                status,
                category,
            };
            return await Product.create(product);
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try {
            return await Product.findAll({ where: { id_seller: id } });
        } catch (error) {
            throw new Error(error);
        }
    }

    async getByCategory(cat) {
        try {
            return await Product.findOne({ where: { category: cat } });
        } catch (error) {
            throw new Error(error);
        }
    }
};
