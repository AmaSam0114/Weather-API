// dbOperations.js

const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

async function queryDatabase(sqlQuery, binds = [], options = {}) {
  let connection;
  let result;

  try {
    connection = await oracledb.getConnection();
    result = await connection.execute(sqlQuery, binds, options);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
        throw error;
      }
    }
  }
}

module.exports.queryDatabase = queryDatabase;
