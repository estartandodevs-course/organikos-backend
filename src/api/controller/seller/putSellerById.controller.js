module.exports = class PutSellerByIdController {
    async execute(req, res) {
        try {
            res.send('Editar um produtor pelo id')
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
