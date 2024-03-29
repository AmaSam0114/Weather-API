import React from 'react';
import WeatherCard from './WeatherCard';
import  getWeatherData  from '../services/WeatherService';

class WeatherMap extends React.Component {
  state = {
    weatherData: [],
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = async () => {
    try {
      const response = await getWeatherData();
      this.setState({ weatherData: response.data });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  render() {
    const { weatherData } = this.state;

    return (
      <div className="weather-map">
        {weatherData.map((data) => (
          <WeatherCard key={data.id} data={data} />
        ))}
      </div>
    );
  }
}

export default WeatherMap;
