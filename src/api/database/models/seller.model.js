const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Seller = sequelize.define('seller', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    delivery: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    wpp: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
// Seller.sync();:
module.exports = Seller;
