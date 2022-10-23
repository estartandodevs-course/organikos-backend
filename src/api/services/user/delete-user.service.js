module.exports = class DeleteUserService {
    constructor(repository) {
        this.repository = repository;
    }
    async delete() {
        try {
            return 'delete user';
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
