import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import { getWeatherByCity } from './services/weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        <ErrorMessage message={error} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;