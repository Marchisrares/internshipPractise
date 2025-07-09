const companyRepository = require('../repositories/companyRepository');

class CompanyService {
    async getAllCompanies() {
        return await companyRepository.getAllCompanies();
    }

    async getCompanyById(id) {
        const company = await companyRepository.getCompanyById(id);
        if (!copany) {
            const error = new Error('Company not found');
            error.status = 404;
            throw error;
        }
        return company;
    }
}

module.exports = new CompanyService();
