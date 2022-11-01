module.exports = class DeleteSellerByIdController {
    constructor(service) {
        this.seller = service;
    }
    async execute(req, res) {
        try {
            const { id } = req.params;

            const seller = await this.seller.delete(id);
            res.status(204).send(JSON.stringify(seller));
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
