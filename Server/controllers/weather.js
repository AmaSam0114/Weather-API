// controllers/weather.js
const Weather = require('../models/weather');

async function getAllWeatherData(req, res) {
  try {
    const data = await Weather.getAllWeatherData();
    res.json(data);
  } catch (error) {
    console.error('Error getting weather data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createWeatherData(req, res) {
  const { district, temperature, humidity, airPressure } = req.body;
  const data = { district, temperature, humidity, airPressure };
  try {
    await Weather.createWeatherData(data);
    res.status(201).json({ message: 'Weather data added successfully' });
  } catch (error) {
    console.error('Error creating weather data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getAllWeatherData, createWeatherData };
