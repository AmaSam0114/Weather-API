// WeatherMap.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import WeatherData from '../models/WeatherData'; // Import the WeatherData model

const WeatherMap = () => {
  const [weatherDataList, setWeatherDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT_HERE');
      const formattedData = response.data.map((item) => {
        return new WeatherData(
          item.id,
          item.district,
          item.temperature,
          item.humidity,
          item.airPressure
        );
      });
      setWeatherDataList(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="weather-map">
      <h1>Real-time Weather Map</h1>
      {weatherDataList.map((data) => (
        <WeatherCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default WeatherMap;
