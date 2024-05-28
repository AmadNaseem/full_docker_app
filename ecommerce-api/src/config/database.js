const { Sequelize } = require('sequelize');
require('dotenv').config(); // Ensure this is at the top

const databaseUrl = process.env.DATABASE_URL || 'postgres://root:root@localhost:5432/ecommerce';

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
});

module.exports = sequelize;
