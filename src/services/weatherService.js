const API_KEY = '6ea5bc5a33da45b5366d311f1a52d0bd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct';

// Updated to accept either city name or coordinates
export const getWeatherByCity = async (cityName, countryCode = 'GB') => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${cityName},${countryCode}&appid=${API_KEY}&units=metric`
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

// New function to get weather by coordinates
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    const data = await response.json();
    
    if (data.cod !== 200) {
      throw new Error('Failed to fetch weather data. Please try again.');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};

// City search suggestions with country filter
export const searchCities = async (query, countryCode = 'GB', limit = 5) => {
  if (!query || query.length < 2) {
    return [];
  }

  try {
    const response = await fetch(
      `${GEO_URL}?q=${query},${countryCode}&limit=${limit}&appid=${API_KEY}`
    );
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    return [];
  }
};

// Helper function to convert m/s to mph
export const convertToMph = (metersPerSecond) => {
  return (metersPerSecond * 2.237).toFixed(2);
};