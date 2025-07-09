const Car = require('../models/Car');
const sequelize = require('../utils/sequelizeInstance');
async function seedCars() {
    await sequelize.sync(); // ensure tables exist

    const cars = [
        {
            make: "Dacia",
            name: "Logan",
            numSeats: 5
        },
        {
            make: "Dacia",
            name: "Duster",
            numSeats: 5
        },
        {
            make: "Porsche",
            name: "911",
            numSeats: 2
        },
    ];

    try {
        await Car.bulkCreate(cars, { validate: true });
        console.log('✅ Cars seeded successfully');
    } catch (err) {
        console.error('❌ Error seeding users:', err);
    } finally {
        await sequelize.close();
    }
}

seedCars();
