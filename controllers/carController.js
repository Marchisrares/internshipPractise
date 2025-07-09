const carService = require('../services/carService');

class CarController {
    async getAllCars(req, res, next) {
        try {
            const cars = await carService.getAllCars();
            res.status(200).json(cars);
        } catch (err) {
            next(err);
        }
    }

    async getCarById(req, res, next) {
        try {
            const user = await carService.getCarById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    async createCar(req, res, next) {
        try {
            const car = await carService.createCar(req.body);
            res.status(201).json(car);
        } catch (err) {
            next(err);
        }
    }

    async updateCar(req, res, next) {
        try {
            const car = await carService.updateCar(req.body);
        } catch (err) {
            next(err);
        }
    }

    async deleteCar(req, res, next) {
        try {
            await carService.deleteCar(req.params.id);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CarController();
