import React, { useEffect, useState } from 'react';
import './miniCard.css'
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';

const MiniCard = ({ timestamp, district }) => {
  
  const [icon, setIcon] = useState()

  

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
    <div className='card'>
      
          <h3>colombo</h3>
          <p>Temperature: 30 °C</p>
          <p>Humidity: 20%</p>
          <p>Air Pressure: 200 Pa</p>
          <div className='w-full flex justify-center items-center flex-1'>
          <img src={icon} alt="forecast not available" className='w-[4rem] h-[4rem]' />
          </div>
       
    </div>
  );
};

export default MiniCard;
