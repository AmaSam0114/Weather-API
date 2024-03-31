import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';

const MiniCard = ({ timestamp, district }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/weather/${district}?timestamp=${timestamp}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
        // Handle error, show error message, etc.
      }
    };

    fetchData();
  }, [timestamp, district]);

  const getWeatherIcon = (iconString) => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        return cloud;
      } else if (iconString.toLowerCase().includes('rain')) {
        return rain;
      } else if (iconString.toLowerCase().includes('clear')) {
        return sun;
      } else if (iconString.toLowerCase().includes('thunder')) {
        return storm;
      } else if (iconString.toLowerCase().includes('fog')) {
        return fog;
      } else if (iconString.toLowerCase().includes('snow')) {
        return snow;
      } else if (iconString.toLowerCase().includes('wind')) {
        return wind;
      }
    }
    return null; // Default icon if no match found
  };

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      {weatherData ? (
        <>
          <p className='text-center'>
            {new Date(timestamp).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
          </p>
          <hr />
          <div className='w-full flex justify-center items-center flex-1'>
            <img src={getWeatherIcon(weatherData.icon)} alt="forecast not available" className='w-[4rem] h-[4rem]' />
          </div>
          <p className='text-center font-bold'>{weatherData.temperature}&deg;C</p>
        </>
      ) : (
        <p className='text-center'>Loading...</p>
      )}
    </div>
  );
};

export default MiniCard;
