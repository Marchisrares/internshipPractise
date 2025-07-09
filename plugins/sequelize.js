const fp = require('fastify-plugin');
const sequelize = require('../utils/sequelizeInstance');
const path = require('path');
const fs = require('fs');

// Load Umzug to run migrations
const { Umzug, SequelizeStorage } = require('umzug');
const {Sequelize} = require("sequelize");

module.exports = fp(async (fastify) => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to MySQL');

        // Load all models
        const modelsDir = path.join(__dirname, '../models');
        fs.readdirSync(modelsDir)
            .filter((file) => file.endsWith('.js'))
            .forEach((file) => {
                require(path.join(modelsDir, file));
            });

        // ✅ Run migrations instead of sync
        const umzug = new Umzug({
            migrations: {
                glob: path.join(__dirname, '../migrations/*.js'),
                resolve: ({ name, path, context }) => {
                    const migration = require(path);
                    return {
                        name,
                        up: async () => migration.up(context.queryInterface, Sequelize),
                        down: async () => migration.down(context.queryInterface, Sequelize)
                    };
                }
            },
            context: {
                queryInterface: sequelize.getQueryInterface()
            },
            storage: new SequelizeStorage({ sequelize }),
            logger: console,
        });


        await umzug.up(); // Run all pending migrations
        console.log('🚀 All migrations executed');

        fastify.decorate('sequelize', sequelize);
    } catch (err) {
        console.error('❌ Sequelize failed to connect:', err.message);
        process.exit(1);
    }
});
