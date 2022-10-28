const Sequelize = require('sequelize');
const configDB = require('./database');

const Seller = require('./models/Seller');

const connection = new Sequelize(configDB);

Seller.init(connection);

module.exports = connection;
