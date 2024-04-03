 /**
 * @swagger
 * components:
 *   schemas:
 *     WeatherData:
 *       type: object
 *       properties:
 *           district:
 *           type: string
 *           description: Name of the district
 *         temperature:
 *           type: number
 *           description: Temperature in Celsius
 *         humidity:
 *           type: number
 *           description: Humidity in percentage
 *         airPressure:
 *           type: number
 *           description: Air pressure in hPa
 *         
 *        
 */



//const WeatherService = require('../services/WeatherService');
const WeatherData = require('../models/weatherModel');
const oracledb = require('oracledb');


//Create Weather Data 
async function createWeatherData(req, res) {
  try {
    const { district, temperature, humidity, airPressure, timestamp } = req.body;
    await WeatherData({
      district,
      temperature,
      humidity,
      airPressure,
      
    });
    res.status(201).json({ message: 'Weather data created successfully' });
  } catch (err) {
    console.error('Error creating weather data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// async function getWeatherData(req, res) {
//   try {
//     const weatherData = await WeatherData.getAllWeatherData(); // Assuming you have a method to fetch all weather data
//     res.status(200).json(weatherData);
//   } catch (err) {
//     console.error('Error getting weather data:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }





async function getWeatherData(req, res) {
  let connection;
  try {
    connection = await oracledb.getConnection();

    const query = `
      SELECT district, temperature, humidity, airPressure, timestamp
      FROM WEATHER_DATA
    `;
    const result = await connection.execute(query);
    
    const weatherData = result.rows;
    res.status(200).json(weatherData);
  } catch (err) {
    console.error('Error getting weather data:', err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing Oracle Database connection:', err);
      }
    }
  }
}

async function updateWeatherData(req, res) {
  try {
    // Logic to update weather data in the database using WeatherData model
    res.status(200).json({ message: 'Update weather data endpoint' });
  } catch (err) {
    console.error('Error updating weather data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteWeatherData(req, res) {
  try {
    // Logic to delete weather data from the database using WeatherData model
    res.status(200).json({ message: 'Delete weather data endpoint' });
  } catch (err) {
    console.error('Error deleting weather data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createWeatherData,
  getWeatherData,
  updateWeatherData,
  deleteWeatherData,
};