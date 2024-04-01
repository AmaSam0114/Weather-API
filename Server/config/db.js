const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // or any other dialect you're using
  host: 'localhost', // or your database host
  port: '1521', // or your database port
  username: 'system',
  password: 'ama123',
  database: 'weather api',
});

module.exports = sequelize;
