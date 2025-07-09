const User = require('../models/User');
const sequelize = require('../utils/sequelizeInstance');

async function seedUsers() {
    await sequelize.sync(); // ensure tables exist

    const users = [
        {
            name: 'Alice Johnson',
            email: 'alice@example.com',
            bio: 'Senior backend developer',
            role: 'ADMIN',
            isActive: true
        },
        {
            name: 'Bob Smith',
            email: 'bob@example.com',
            bio: 'Frontend enthusiast',
            role: 'USER',
            isActive: true
        },
        {
            name: 'Charlie Doe',
            email: 'charlie@example.com',
            bio: 'Fullstack dev',
            role: 'USER',
            isActive: false
        }
    ];

    try {
        await User.bulkCreate(users, { validate: true });
        console.log('✅ Users seeded successfully');
    } catch (err) {
        console.error('❌ Error seeding users:', err);
    } finally {
        await sequelize.close();
    }
}

seedUsers();
