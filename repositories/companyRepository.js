const Company = require('../models/Company');

class CompanyRepository {
    async getAllCompanies() {
        return Company.findAll({
            attributes: ['id', 'name', 'email', 'contact','description','field','isActive'],
            raw: true,
            nest: true
        });
    }

    async getCompanyById(id) {
        return Company.findByPk(id, {
            attributes: ['id', 'name', 'email', 'contact','description','field','isActive'],
            raw: true,
            nest: true
        });
    }
}

module.exports = new CompanyRepository();
