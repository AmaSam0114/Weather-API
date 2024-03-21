const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weatherController');

router.get('/weather', WeatherController.getWeatherData);

module.exports = router;
