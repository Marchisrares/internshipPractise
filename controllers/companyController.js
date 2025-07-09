const companyService = require('../services/companyService');

class CompanyController {
    async getAllCompanies(req, res) {
        try {
            const companies = await companyService.getAllCompanies();
            res.status(200).json(companies);
        } catch (err) {
        }
    }

    async getCompanyById(req, res) {
        try {
            const company = await companyService.getCompanyById(req.params.id);
            res.status(200).json(company);
        } catch (err) {
        }
    }
}

module.exports = new CompanyController();

//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
