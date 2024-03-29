// WeatherService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Update with backend server URL

const WeatherService = {
  async getWeatherData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/weather`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default WeatherService;
