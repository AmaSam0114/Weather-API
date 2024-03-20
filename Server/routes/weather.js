// routes/weather.js
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather');

router.get('/', weatherController.getAllWeatherData);
router.post('/', weatherController.createWeatherData);

module.exports = router;
