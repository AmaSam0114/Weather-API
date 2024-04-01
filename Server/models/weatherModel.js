const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const WeatherData = sequelize.define('WeatherData', {
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: -100, // Example minimum temperature value
      max: 100,  // Example maximum temperature value
    },
  },
  humidity: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,    // Example minimum humidity value
      max: 100,  // Example maximum humidity value
    },
  },
  airPressure: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 800,  // Example minimum air pressure value
      max: 1200, // Example maximum air pressure value
    },
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  
});

module.exports = WeatherData;
