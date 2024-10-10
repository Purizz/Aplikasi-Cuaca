import axios from 'axios';

const API_KEY = '5292a8099f46959541311edacd119115'; // Ganti dengan API key Anda
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Menampilkan suhu dalam Celsius
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
