const Fastify = require('fastify');
const buildApp = require('./app'); // this is a function, not an app instance
const sequelize = require('./utils/sequelizeInstance');

const PORT = process.env.PORT || 5000;

const fastify = Fastify({ logger: true });

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to MySQL database');
        await sequelize.sync({ alter: true });

        await buildApp(fastify, {}); // initialize routes/plugins

        await fastify.listen({ port: PORT });
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    } catch (err) {
        console.error('❌ Failed to connect to DB or start server:', err);
        process.exit(1);
    }
})();
