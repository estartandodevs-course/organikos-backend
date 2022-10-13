const { Router } = require('../../../config/app')
const {
    getAllController,
    getByTagController,
    getByIdController,
    postNewSellerController,
    putSellerByIdController,
    deleteSellerByIdController,
} = require('../../../api/controller/seller/index')

const SellerRouter = Router()

SellerRouter.get('/seller', getAllController.execute)
SellerRouter.get('/seller/tag/:id_tag', getByTagController.execute)
SellerRouter.get('/seller/:id', getByIdController.execute)
SellerRouter.post('/seller', postNewSellerController.execute)
SellerRouter.put('/seller/:id', putSellerByIdController.execute)

SellerRouter.delete('/seller/:id', deleteSellerByIdController.execute)

module.exports = SellerRouter
