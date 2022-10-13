const { Router } = require('../../../config/app')

const SellerRouter = Router()

SellerRouter.get('/seller', async (req, res) => {
    res.send('Listar todos os produtores')
})
SellerRouter.get('/seller/tag/:id_tag', async (req, res) => {
    res.send('Listar todos os produtores que vendem determinado produto')
})
SellerRouter.get('/seller/:id', (req, res) => {
    res.send('Listar produtor pelo id')
})
SellerRouter.post('/seller', (req, res) => {
    res.send('Cadastrar novo produtor')
})
SellerRouter.put('/seller/:id', (req, res) => {
    res.send('Editar um produtor pelo id')
})
SellerRouter.delete('/seller/:id', (req, res) => {
    res.send('Deleter um produtor pelo id')
})

module.exports = SellerRouter
