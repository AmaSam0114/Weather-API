// WeatherCard.js
import React from 'react';
import WeatherData from '../models/WeatherData'; // Import the WeatherData model

const WeatherCard = ({ data }) => {
  const weatherData = new WeatherData(
    data.id,
    data.district,
    data.temperature,
    data.humidity,
    data.airPressure
  );

  return (
    <div className="weather-card">
      <h2>{weatherData.district}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Air Pressure: {weatherData.airPressure} hPa</p>
    </div>
  );
};

export default WeatherCard;
