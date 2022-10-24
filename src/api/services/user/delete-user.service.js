module.exports = class DeleteUserService {
    constructor(repository) {
        this.repository = repository;
    }
    async delete(id) {
        try {
            await this.repository.delete(id);
            return { id: id };
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
