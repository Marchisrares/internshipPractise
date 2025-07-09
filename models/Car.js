const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelizeInstance');

class Car extends Model {}

Car.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Car',
    tableName: 'cars',
    timestamps: true,
    underscored: true
});

module.exports = Car;
