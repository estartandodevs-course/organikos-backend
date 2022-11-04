module.exports = class PutProductController {
    constructor(service) {
        this.product = service;
    }
    async execute(req, res) {
        try {
            const { id } = req.params;
            const product = await this.product.update(req.body, id);
            res.status(204).send(JSON.stringify(product));
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
