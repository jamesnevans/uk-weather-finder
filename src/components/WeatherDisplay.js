import React from 'react';
import { convertToMph } from '../services/weatherService';
import Tabs, { TabPanel } from './Tabs';
import WeatherBackground from './WeatherBackground';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <>
      <WeatherBackground weatherCondition={weatherData.weather[0].main} />
      
      <div className="weather-display">
        <div className="weather-header">
          <h2>{weatherData.name}</h2>
          <img 
            src={iconUrl} 
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
        </div>

        <div className="weather-main">
          <div className="current-conditions">
            <p className="conditions-text">
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>

        <Tabs>
          <TabPanel label="Temperature">
            <div className="weather-grid">
              <div className="weather-item">
                <span className="label">Current Temperature</span>
                <span className="value">{weatherData.main.temp}°C</span>
              </div>

              <div className="weather-item">
                <span className="label">Feels Like</span>
                <span className="value">{weatherData.main.feels_like}°C</span>
              </div>

              <div className="weather-item">
                <span className="label">Min Temperature</span>
                <span className="value">{weatherData.main.temp_min}°C</span>
              </div>

              <div className="weather-item">
                <span className="label">Max Temperature</span>
                <span className="value">{weatherData.main.temp_max}°C</span>
              </div>
            </div>
          </TabPanel>

          <TabPanel label="Atmospheric Conditions">
            <div className="weather-grid">
              <div className="weather-item">
                <span className="label">Humidity</span>
                <span className="value">{weatherData.main.humidity}%</span>
              </div>

              <div className="weather-item">
                <span className="label">Wind Speed</span>
                <span className="value">{convertToMph(weatherData.wind.speed)} mph</span>
              </div>

              <div className="weather-item">
                <span className="label">Rain (Last Hour)</span>
                <span className="value">
                  {weatherData.rain?.['1h'] || 0} mm
                </span>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default WeatherDisplay;