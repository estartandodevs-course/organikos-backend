const { app } = require('./config/app');
require('dotenv').config();
require('./api/repository/database');

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
