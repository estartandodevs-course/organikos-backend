const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Order_product = sequelize.define('order_product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

Order_product.sync();
module.exports = Order_product;
