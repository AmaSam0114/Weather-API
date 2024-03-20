// models/weather.js
const oracledb = require('oracledb');

async function getAllWeatherData() {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM weather_data');
    await connection.close();
    return result.rows;
  } catch (error) {
    console.error('Error getting weather data:', error);
    throw error;
  }
}

async function createWeatherData(data) {
  const { district, temperature, humidity, airPressure } = data;
  try {
    const connection = await oracledb.getConnection();
    await connection.execute(
      `INSERT INTO weather_data (district, temperature, humidity, air_pressure) VALUES (:1, :2, :3, :4)`,
      [district, temperature, humidity, airPressure]
    );
    await connection.commit();
    await connection.close();
  } catch (error) {
    console.error('Error creating weather data:', error);
    throw error;
  }
}

module.exports = { getAllWeatherData, createWeatherData };
