import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import { getWeatherByCity, getWeatherByCoordinates } from './services/weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const handleSearch = async (searchData) => {
    setIsLoading(true);
    setError('');
    setWeatherData(null);

    try {
      let data;
      
      if (searchData.type === 'coordinates') {
        data = await getWeatherByCoordinates(searchData.lat, searchData.lon);
      } else {
        data = await getWeatherByCity(searchData.city, searchData.country);
      }
      
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackgroundTypeChange = (backgroundType) => {
    // Dark backgrounds that need light text
    const darkBackgrounds = ['rainy', 'stormy', 'cloudy', 'misty', 'snowy'];
    setIsDarkBackground(darkBackgrounds.includes(backgroundType));
  };

  return (
    <div className="App">
      <div className={`container ${isDarkBackground ? 'dark-background' : ''}`}>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        <ErrorMessage message={error} />
        <WeatherDisplay weatherData={weatherData} onBackgroundTypeChange={handleBackgroundTypeChange} />
      </div>
    </div>
  );
}

export default App;