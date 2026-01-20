const API_KEY = '6ea5bc5a33da45b5366d311f1a52d0bd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (cityName, country = 'uk') => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${cityName},${country}&appid=${API_KEY}&units=metric`
    );
    
    const data = await response.json();
    
    if (data.cod === '404') {
      throw new Error('City not found. Please check the spelling and try again.');
    }
    
    if (data.cod !== 200) {
      throw new Error('Failed to fetch weather data. Please try again.');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};

// Helper function to convert m/s to mph
export const convertToMph = (metersPerSecond) => {
  return (metersPerSecond * 2.237).toFixed(2);
};