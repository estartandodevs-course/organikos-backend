module.exports = class GetAllSellerService {
    constructor(repository) {
        this.repository = repository;
    }
    async getAll() {
        try {
            console.log('oi');
            return await this.repository.getAll();
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 500 })
            );
        }
    }
};
