const userRepository = require('../repositories/userRepository');

class UserService {
    async getAllUsers() {
        return await userRepository.getAllUsers();
    }

    async getUserById(id) {
        const user = await userRepository.getUserById(id);
        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        return user;
    }
}

module.exports = new UserService();
