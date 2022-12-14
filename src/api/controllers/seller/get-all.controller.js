module.exports = class GetAllSellerController {
    constructor(service) {
        this.seller = service;
    }
    async execute(req, res) {
        try {
            const seller = await this.seller.getAll();
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
