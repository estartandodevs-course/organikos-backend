const Sequelize = require('sequelize');
const configDB = require('./database');

const connection = new Sequelize(configDB);

module.exports = connection;
