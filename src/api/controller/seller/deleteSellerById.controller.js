module.exports = class DeleteSellerByIdController {
    async execute(req, res) {
        try {
            res.send('Deletar um produtor pelo id')
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
