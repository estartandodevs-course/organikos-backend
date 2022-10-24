module.exports = class UserRepository {
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

    async getById() {
        try {
            return 'get seller by id';
        } catch (error) {
            return error;
        }
    }
    async delete(id) {
        try {
            return `delete seller by id ${id}`;
        } catch (error) {
            return error;
        }
    }
};
