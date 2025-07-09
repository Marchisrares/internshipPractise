require('dotenv').config();

const sequelizeConfig = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false,
    define: {
        timestamps: true,
        underscored: true
    }
};

module.exports = { sequelizeConfig };
