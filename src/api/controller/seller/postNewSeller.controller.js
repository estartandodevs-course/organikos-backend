module.exports = class PostNewSellerController {
    async execute(req, res) {
        try {
            res.send('Cadastrar novo produtor')
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
