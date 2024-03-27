// server.js

const express = require('express');
const bodyParser = require('body-parser');
const dbOperations = require('../config/dbOperations');

const app = express();
app.use(bodyParser.json());

app.get('/api/weather', async (req, res) => {
  try {
    const weatherData = await dbOperations.queryDatabase('SELECT * FROM weather_data');
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port 3000`);
});
