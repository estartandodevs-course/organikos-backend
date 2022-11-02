const Sequelize = require('sequelize');
// const configDB = require('./database');

const Seller = require('./models/Seller');

const connection = new Sequelize(
    'postgres://estartandodev:Lqned1clI6YBTsnNe1X1frh0cHOzZL6g@dpg-cdgoodkgqg47bmbi5fhg-a.oregon-postgres.render.com/seller',
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true,
            native: true,
        },
    }
);

async function connectionTest() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectionTest();

Seller.init(connection);

module.exports = connection;
