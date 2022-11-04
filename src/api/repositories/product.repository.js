const { Op } = require('sequelize');
const Product = require('../database/models/product.model');

module.exports = class ProductRepository {
    constructor() {}
    async create(data) {
        try {
            const { id_seller, name, price, measure, status, category } = data;
            const product = {
                id_seller: id_seller,
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
    async getByName(name) {
        const letter = name.charAt(0).toLowerCase();
        try {
            return await Product.findAll({
                where: {
                    name: { [Op.like]: `${letter}%` },
                },
                raw: true,
            });
        } catch (error) {
            throw new Error(error);
        }
    }
    async getByTag(params) {
        const tags = params.split(',');
        console.log(tags);
        try {
            return await Product.findAll({
                where: {
                    category: { [Op.in]: tags },
                },
                raw: true,
            });
        } catch (error) {}
    }
};
