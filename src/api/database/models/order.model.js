const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Order = sequelize.define('order', {
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
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    payment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    distribution: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Order.sync();
module.exports = Order;
