const { Sequelize } = require('sequelize');
const { sequelizeConfig } = require('../config/sequelize');

const sequelize = new Sequelize(
    sequelizeConfig.database,
    sequelizeConfig.username,
    sequelizeConfig.password,
    sequelizeConfig
);

module.exports = sequelize;
