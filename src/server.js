const { app } = require('./config/app');
require('dotenv').config();

const sequelize = require('./config/database');

//fazer conexão com o banco de dados
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const port = process.env.PORT || 3001;
const {
    ProductRouter,
    UserRouter,
    SellerRouter,
} = require('./api/routes/index');

app.use('/api', UserRouter, ProductRouter, SellerRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
