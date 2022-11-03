const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const User = sequelize.define('user', {
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
    certificate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

User.sync();
module.exports = User;
