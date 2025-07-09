// routes/users.js
const userService = require('../services/userService');

module.exports = async function (fastify, opts) {
    fastify.get('/api/users', async (request, reply) => {
        const users = await userService.getAllUsers();
        return users;
    });

    fastify.get('/api/users/:id', async (request, reply) => {
        try {
            const user = await userService.getUserById(request.params.id);
            return user;
        } catch (err) {
            reply.code(err.status || 500).send({ error: err.message });
        }
    });
};
