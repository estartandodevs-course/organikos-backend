module.exports = class GetUserByIdService {
    constructor(repository) {
        this.repository = repository;
    }
    async getById(params) {
        try {
            const id = params.id;
            return id;
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
