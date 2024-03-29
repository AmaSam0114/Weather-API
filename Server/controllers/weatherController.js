const WeatherData = require('../models/weatherModel');
const WeatherService = require('../services/WeatherService');

const createWeatherData = async (req, res) => {
  try {
    const { temperature, humidity, airPressure, timestamp, district } = req.body;
    
    // Validate input data
    if (!temperature || !humidity || !airPressure || !timestamp || !district) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Business logic for checking duplicate data or other constraints
    const existingData = await WeatherData.findOne({ where: { timestamp, district } });
    if (existingData) {
      return res.status(409).json({ message: 'Data already exists for this timestamp and district' });
    }

    // Create new weather data entry
    const newData = await WeatherData.create({
      temperature,
      humidity,
      airPressure,
      timestamp,
      district,
    });

    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getWeatherData = async (req, res) => {
  try {
    const data = await WeatherService.getWeatherData();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateWeatherData = async (req, res) => {
  try {
    const { id } = req.params;
    const { temperature, humidity, airPressure, timestamp, district } = req.body;

    // Validate input data
    if (!temperature || !humidity || !airPressure || !timestamp || !district) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Update weather data entry
    const updatedData = await WeatherData.update({
      temperature,
      humidity,
      airPressure,
      timestamp,
      district,
    }, { where: { id } });

    if (updatedData[0] === 0) {
      return res.status(404).json({ message: 'Weather data not found' });
    }

    res.status(200).json({ message: 'Weather data updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteWeatherData = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete weather data entry
    const deletedData = await WeatherData.destroy({ where: { id } });

    if (!deletedData) {
      return res.status(404).json({ message: 'Weather data not found' });
    }

    res.status(200).json({ message: 'Weather data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createWeatherData, getWeatherData, updateWeatherData, deleteWeatherData };
