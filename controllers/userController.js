const userService = require('../services/userService');

class UserController {
    async getAllUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (err) {

        }
    }

    async getUserById(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (err) {

        }
    }
}

module.exports = new UserController();

//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
