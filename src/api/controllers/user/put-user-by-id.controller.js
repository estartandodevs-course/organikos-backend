module.exports = class PutUserByIdController {
    constructor(service) {
        this.user = service;
    }
    async execute(req, res) {
        try {
            const { id } = req.params;
            const user = await this.user.update(req.body, id);
            res.status(200).send(JSON.stringify(user));
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
