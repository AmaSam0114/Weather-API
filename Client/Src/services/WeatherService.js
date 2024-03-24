import axios from 'axios';
import { API_ENDPOINT } from '../utils/constants';

export const getWeatherData = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/weather`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
