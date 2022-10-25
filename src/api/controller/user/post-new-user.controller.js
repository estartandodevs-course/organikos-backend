module.exports = class PostNewUserController {
    constructor(service) {
        this.user = service;
    }
    async execute(req, res) {
        try {
            const user = await this.user.create(req.body);
            res.status(201).send(JSON.stringify(user));
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
