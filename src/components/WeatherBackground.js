import React from 'react';
import './WeatherBackground.css';

const WeatherBackground = ({ weatherCondition }) => {
  // Map weather conditions to background types
  const getBackgroundType = () => {
    const condition = weatherCondition.toLowerCase();
    
    if (condition.includes('rain') || condition.includes('drizzle')) {
      return 'rainy';
    } else if (condition.includes('snow')) {
      return 'snowy';
    } else if (condition.includes('cloud')) {
      return 'cloudy';
    } else if (condition.includes('clear')) {
      return 'clear';
    } else if (condition.includes('thunder') || condition.includes('storm')) {
      return 'stormy';
    } else if (condition.includes('mist') || condition.includes('fog') || condition.includes('haze')) {
      return 'misty';
    } else {
      return 'default';
    }
  };

  const backgroundType = getBackgroundType();

  // Create animated particles based on weather
  const renderParticles = () => {
    if (backgroundType === 'rainy') {
      return Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="raindrop" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${0.5 + Math.random() * 0.5}s`
        }}></div>
      ));
    } else if (backgroundType === 'snowy') {
      return Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="snowflake" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}>❅</div>
      ));
    }
    return null;
  };

  return (
    <div className={`weather-background ${backgroundType}`}>
      {renderParticles()}
      <div className="weather-overlay"></div>
    </div>
  );
};

export default WeatherBackground;