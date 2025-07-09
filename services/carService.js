const carRepository = require('../repositories/carRepository');

class CarService {
    async getAllCars() {
        return await carRepository.getAllCars();
    }

    async getCarById(id) {
        const car = await carRepository.getUserById(id);
        if (!car) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }
        return car;
    }

    async createCar(car) {
        return await carRepository.createCar(car);
    }

    async updateCar(id, car) {
        return await carRepository.updateCar(id, car);
    }

    async deleteCar(id) {
        await carRepository.deleteCar(id);
    }
}

module.exports = new CarService();
