const oracledb = require('oracledb');
require('dotenv').config(); // Load environment variables

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
};

async function initialize() {
  try {
    await oracledb.createPool(dbConfig);
    console.log('Oracle Database connection created.');
  } catch (err) {
    console.error('Error initializing Oracle Database:', err);
  }
}

initialize();

module.exports = oracledb;
