module.exports = class GetProductByTagController {
    constructor(service) {
        this.product = service;
    }
    async execute(req, res) {
        try {
            const tags = req.query.category;
            console.log(req.query);
            const product = await this.product.getByTag(tags);
            res.status(200).send(JSON.stringify(product));
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
