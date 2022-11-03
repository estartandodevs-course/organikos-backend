module.exports = class UserRepository {
    constructor() {}
    async create(user) {
        try {
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    async update() {
        try {
            return 'update seller';
        } catch (error) {}
    }

    async getById() {
        try {
            throw new Error('get seller by id');
        } catch (error) {}
    }
    async delete(id) {
        try {
            return `delete seller by id ${id}`;
        } catch (error) {
            throw new Error(error);
        }
    }
};
