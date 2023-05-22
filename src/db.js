require('dotenv').config();
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(`
// postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOSTPG}:${DB_PORT}/${DB_DATABASE}`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
const sequelize = new Sequelize("postgresql://postgres:WN4LXtI1zdnusJ6BuMkl@containers-us-west-72.railway.app:6268/railway", {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});