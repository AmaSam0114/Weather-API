// dbConfig.js

const oracledb = require('oracledb');

async function initialize() {
  const pool = await oracledb.createPool({
    user: 'system',
    password: 'ama123',
    connectString: 'localhost:1521/XEPDB1',
    poolMax: 10,
    poolMin: 2,
    poolIncrement: 1,
    poolTimeout: 60,
  });
  return pool;
}

module.exports.initialize = initialize;
