module.exports = class DeleteSellerService {
    constructor() {}
    async delete() {
        try {
            return 'delete seller';
        } catch (error) {
            throw new Error(
                JSON.stringify({ error: error.message, statusCode: 400 })
            );
        }
    }
};
