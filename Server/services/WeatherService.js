const WeatherData = require('../models/weatherModel');

const getWeatherData = async () => {
  try {
    const data = await WeatherData.findAll();
    return data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

module.exports = { getWeatherData };
