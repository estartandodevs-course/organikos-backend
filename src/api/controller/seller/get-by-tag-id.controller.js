module.exports = class GetSellerByTagController {
    constructor(service) {
        this.seller = service;
    }
    async execute(req, res) {
        try {
            const { id_tag } = req.params;
            const seller = await this.seller.getByTag(id_tag);
            res.status(200).send(JSON.stringify(seller));
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
