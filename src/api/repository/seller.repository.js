module.exports = class SellerRepository {
    constructor() {}
    async create() {
        try {
            return 'create seller';
        } catch (error) {
            return error;
        }
    }
    async update() {
        try {
            return 'update seller';
        } catch (error) {
            return error;
        }
    }
    async getAll() {
        try {
            return 'get all seller';
        } catch (error) {
            return error;
        }
    }
    async getByTag() {
        try {
            return 'get seller by tag';
        } catch (error) {
            return error;
        }
    }
    async getById() {
        try {
            return 'get seller by id';
        } catch (error) {
            return error;
        }
    }
    async delete() {
        try {
            return 'delete seller';
        } catch (error) {
            return error;
        }
    }
};
