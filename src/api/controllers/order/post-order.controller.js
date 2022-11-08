module.exports = class PostNewProductController {
    constructor(service) {
        this.order = service;
    }
    async execute(req, res) {
        try {
            const {
                id_seller,
                id_user,
                products,
                payment,
                total_price,
                distribution,
            } = req.body;
            const product = await this.order.createOrder({
                id_seller,
                id_user,
                products,
                payment,
                distribution,
                total_price,
            });
            res.status(201).send(JSON.stringify(product));
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            if (errorObj.statusCode) {
                return res
                    .status(errorObj.statusCode)
                    .send(JSON.stringify(errorObj));
            } else {
                return res.status(500).send(error.message);
            }
        }
    }
};
