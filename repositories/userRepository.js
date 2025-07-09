const User = require('../models/User');

class UserRepository {
    async getAllUsers() {
        return User.findAll({
            attributes: ['id', 'name', 'email', 'bio', 'role', 'isActive'],
            raw: true,
            nest: true
        });
    }

    async getUserById(id) {
        return User.findByPk(id, {
            attributes: ['id', 'name', 'email', 'bio', 'role', 'isActive'],
            raw: true,
            nest: true
        });
    }
}

module.exports = new UserRepository();
