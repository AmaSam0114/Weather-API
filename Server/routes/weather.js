// routes/weather.js
const express = require('express');
const router = express.Router();
const { getWeatherData, createWeatherData } = require('../controllers/weather');

router.get('/', getWeatherData);
router.post('/', createWeatherData);

module.exports = router;
