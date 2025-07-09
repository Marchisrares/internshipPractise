const companyController = require('../controllers/companyController');

module.exports = async function (fastify, opts) {
    fastify.get('/api/companies', async (request, reply) => {
        const companies = await companyController.getAllCompanies();
        return companies;
    });

    fastify.get('/api/companies/:id', async (request, reply) => {
        try {
            const company = await companyController.getCompanyById(request.params.id);
            return company;
        } catch (err) {
            reply.code(err.status || 500).send({ error: err.message });
        }
    });
};
