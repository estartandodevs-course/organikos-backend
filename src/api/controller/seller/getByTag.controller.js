module.exports = class GetSellerByTagController {
    async execute(req, res) {
        try {
            res.send(
                'Listar todos os produtores que vendem determinado produto'
            );
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
