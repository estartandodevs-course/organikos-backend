const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Address = sequelize.define('address', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_sellers: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_users: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Address.sync();
module.exports = Address;
