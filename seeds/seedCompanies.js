const Company = require('../models/Company');
const sequelize = require('../utils/sequelizeInstance');

async function seedCompanies() {
    await sequelize.sync();

    const companies = [
        {
            name: 'X2 Mobile',
            email: 'contact@x2mobile.net',
            contact: '123-456-7890',
            description: 'Software Company',
            field:'IT',
            isActive: true
        },
        {
            name: 'Tech Innovators',
            email: 'tech@software.ro',
            contact: '123-456-9090',
            description: 'Software Company',
            field:'IT',
            isActive: true
        },
        {
            name: 'Amazon',
            email: 'amazon@aws.ro',
            contact: '143-456-2343',
            description: 'E-commerce Giant',
            field:'E-commerce',
            isActive: true
        }
    ];

    try {
        await Company.bulkCreate(companies, { validate: true });
        console.log('✅ Company seeded successfully');
    } catch (err) {
        console.error('❌ Error seeding companies:', err);
    } finally {
        await sequelize.close();
    }
}

seedCompanies();
