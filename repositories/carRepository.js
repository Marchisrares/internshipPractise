const Car = require('../models/Car');

class CarRepository {
    async getAllCars() {
        return Car.findAll({
            attributes: Car.getAttributes(),
            raw: true,
            nest: true
        });
    }

    async getUserById(id) {
        return Car.findByPk(id, {
            attributes: Car.getAttributes(),
            raw: true,
            nest: true
        });
    }

    async createCar(car) {
        return await Car.create(car);
    }

    async updateCar(id, car) {
        const dbCar = await Car.findByPk(id);
        if (!car) {
            throw new Error()
        }
       return await dbCar.update(car);
    }

    async deleteCar(id) {
        const car = await Car.findByPk(id);
        await car.destroy();
    }
}

module.exports = new CarRepository();
