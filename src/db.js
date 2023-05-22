require('dotenv').config();
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(`
// postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOSTPG}:${DB_PORT}/${DB_DATABASE}`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const sequelize = new Sequelize("postgres://default:R5x0BDaLHguk@ep-small-wood-574603.us-east-1.postgres.vercel-storage.com:5432/verceldb", {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});