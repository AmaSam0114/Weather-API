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
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: Timestamp of the weather data
 *        
 */



const WeatherService = require('../services/WeatherService');
const WeatherData = require('../models/weatherModel');

const createWeatherData = async (req, res) => {
  try {
    const { district, temperature, humidity, airPressure, timestamp } = req.body;

    // Validate input data
    if (!district || !temperature || !humidity || !airPressure || !timestamp) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Business logic for checking duplicate data or other constraints
    const existingData = await WeatherData.findOne({ where: { timestamp, district } });
    if (existingData) {
      return res.status(409).json({ message: 'Data already exists for this timestamp and district' });
    }

    // Create new weather data entry
    const newData = await WeatherData.create({
      district,
      temperature,
      humidity,
      airPressure,
      timestamp,
    });

    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getWeatherData = async (req, res) => {
  try {
    const data = await WeatherData.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateWeatherData = async (req, res) => {
  try {
    const { id } = req.params;
    const { district, temperature, humidity, airPressure, timestamp } = req.body;

    // Validate input data
    if (!district || !temperature || !humidity || !airPressure || !timestamp) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Update weather data entry
    const updatedData = await WeatherData.update({
      district,
      temperature,
      humidity,
      airPressure,
      timestamp,
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
