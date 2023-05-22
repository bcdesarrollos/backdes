require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
    DB_USER, DB_PASSWORD, DB_HOSTPG, DB_DATABASE, DB_PORT, ACCESS_TOKEN, DB_DEPLOY
  } = process.env;
  
  const sequelize = new Sequelize(`
  postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOSTPG}:${DB_PORT}/${DB_DATABASE}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });
  