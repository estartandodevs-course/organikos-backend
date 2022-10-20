const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('organikos', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize
    .authenticate()
    .then(function () {
        console.log('conexão criada com sucesso');
    })
    .catch(function () {
        console.log('conexão não realizada');
    });

module.exports = sequelize;
