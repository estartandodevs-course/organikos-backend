const Sequelize = require('sequelize');
const configDB = require('./database');

const Seller = require('./models/Seller');

const connection = new Sequelize(configDB);

async function connectionTest() {
    try {
        await Sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectionTest();

Seller.init(connection);

module.exports = connection;
