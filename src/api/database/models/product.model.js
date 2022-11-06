const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_seller: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
    measure: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
    },
    category: {
        type: DataTypes.STRING,
    },
});
// Product.sync();
module.exports = Product;
