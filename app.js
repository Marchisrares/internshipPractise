const path = require('path');
const AutoLoad = require('@fastify/autoload');

async function app(fastify, opts) {
    // Register all plugins in /plugins
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: opts
    });

    // Register all routes in /routes
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: opts
    });
}

module.exports = app;
