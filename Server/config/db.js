// db.js
const oracledb = require('oracledb');
const dotenv = require('dotenv');
//const { Sequelize } = require('sequelize');
const { Sequelize } = require('sequelize');

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_CONNECT_STRING } = process.env;

async function sequelize() {
  try {
    await oracledb.createPool({
      user: DB_USER,
      password: DB_PASSWORD,
      connectString: DB_CONNECT_STRING,
    });
    console.log('OracleDB connection pool created successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

module.exports.sequelize = sequelize;
