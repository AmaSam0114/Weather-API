
const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weatherController');


/**
 * @swagger
 * /weather/getData:
 *   get:
 *     summary: Get all weather data
 *     responses:
 *       200:
 *         description: A list of weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WeatherData'
 */
router.get('/weather/getData', WeatherController.getWeatherData);

/**
 * @swagger
 * /weather/createData:
 *   post:
 *     summary: Create new weather data entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               district:
 *                 type: string
 *               temperature:
 *                 type: number
 *               humidity:
 *                 type: number
 *               airPressure:
 *                 type: number
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *               
 *     responses:
 *       '201':
 *         description: Weather data created successfully
 *       '400':
 *         description: Missing required fields or invalid input
 *       '409':
 *         description: Data already exists for this timestamp and district
 *       '500':
 *         description: Internal server error
 */
router.post('/weather/createData', WeatherController.createWeatherData);

/**
 * @swagger
 * /weather/update/{id}:
 *   put:
 *     summary: Update weather data entry
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the weather data entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperature:
 *                 type: number
 *               humidity:
 *                 type: number
 *               airPressure:
 *                 type: number
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *               district:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Weather data updated successfully
 *       '400':
 *         description: Missing required fields
 *       '404':
 *         description: Weather data not found
 *       '500':
 *         description: Internal server error
 */
router.put('/weather/update/:id', WeatherController.updateWeatherData);

/**
 * @swagger
 * /weather/delete/{id}:
 *   delete:
 *     summary: Delete weather data entry
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the weather data entry
 *     responses:
 *       '200':
 *         description: Weather data deleted successfully
 *       '404':
 *         description: Weather data not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/weather/delete/:id', WeatherController.deleteWeatherData);

module.exports = router;