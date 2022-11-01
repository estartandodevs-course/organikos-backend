module.exports = class DeleteUserByIdController {
    constructor(service) {
        this.user = service;
    }
    async execute(req, res) {
        try {
            const { id } = req.params;
            const user = await this.user.delete(id);
            res.status(204).send(JSON.stringify(user));
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
