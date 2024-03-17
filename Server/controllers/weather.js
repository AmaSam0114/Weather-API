// controllers/weather.js
const oracledb = require('oracledb');

async function getWeatherData(req, res) {
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM weather_data');
    await connection.close();
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting weather data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createWeatherData(req, res) {
  const { district, temperature, humidity, airPressure } = req.body;
  try {
    const connection = await oracledb.getConnection();
    await connection.execute(
      `INSERT INTO weather_data (district, temperature, humidity, air_pressure) VALUES (:1, :2, :3, :4)`,
      [district, temperature, humidity, airPressure]
    );
    await connection.commit();
    await connection.close();
    res.status(201).json({ message: 'Weather data added successfully' });
  } catch (error) {
    console.error('Error creating weather data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getWeatherData, createWeatherData };
