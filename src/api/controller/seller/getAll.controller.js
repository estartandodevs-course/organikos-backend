module.exports = class GetAllSellerController {
    async execute(req, res) {
        try {
            res.send('Listar todos os produtores');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
