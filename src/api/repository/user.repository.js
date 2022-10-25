module.exports = class UserRepository {
    constructor() {}
    async create(user) {
        try {
            return user;
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
