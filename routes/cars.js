// routes/cars.js
const carController = require('../controllers/carController');

module.exports = async function (fastify, opts) {
    fastify.get('/api/cars', carController.getAllCars);

    fastify.get('/api/cars/:id', carController.getCarById);

    fastify.post('/api/cars', carController.createCar);

    fastify.put('/api/cars', carController.updateCar);

    fastify.delete('/api/cars/:id', carController.deleteCar);
};
