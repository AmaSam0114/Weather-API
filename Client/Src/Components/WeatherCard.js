import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h3>{data.location}</h3>
      <p>Temperature: {data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Air Pressure: {data.airPressure} hPa</p>
    </div>
  );
};

export default WeatherCard;
