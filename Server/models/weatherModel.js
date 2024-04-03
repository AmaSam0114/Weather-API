const oracledb = require('../config/db');
async function WeatherData(data) {
  let connection;
  try {
    connection = await oracledb.getConnection();
    const query = `
      INSERT INTO WEATHER_DATA (district, temperature, humidity, airPressure, timestamp)
      VALUES (:district, :temperature, :humidity, :airPressure, TO_TIMESTAMP(:timestamp, 'YYYY-MM-DD HH24:MI:SS'))
    `;
    const result = await connection.execute(query, {
      district: data.district,
      temperature: data.temperature,
      humidity: data.humidity,
      airPressure: data.airPressure,
      timestamp: data.timestamp,
    });
    console.log('Weather data inserted:', result.rowsAffected);
  } catch (err) {
    console.error('Error inserting weather data:', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing Oracle Database connection:', err);
      }
    }
  }
}
module.exports =  WeatherData ;









// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const WeatherData = sequelize.define('WeatherData', {
//   district: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   temperature: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//     validate: {
//       min: -100, // Example minimum temperature value
//       max: 100,  // Example maximum temperature value
//     },
//   },
//   humidity: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//     validate: {
//       min: 0,    // Example minimum humidity value
//       max: 100,  // Example maximum humidity value
//     },
//   },
//   airPressure: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//     validate: {
//       min: 800,  // Example minimum air pressure value
//       max: 1200, // Example maximum air pressure value
//     },
//   },
//   timestamp: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
  
// });

// module.exports = WeatherData;
