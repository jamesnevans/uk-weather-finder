import React, { useState } from 'react';
import { searchCities } from '../services/weatherService';
import CountrySelector from './CountrySelector';
import Help from './Help';
import './SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('GB');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch({ type: 'city', city: city.trim(), country });
      setShowSuggestions(false);
      setSuggestions([]);
    }
  };

  const handleSearchSuggestions = async () => {
    if (city.length >= 2) {
      const results = await searchCities(city, country, 10);
      setSuggestions(results);
      setShowSuggestions(true);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setCity(suggestion.name);
    onSearch({ 
      type: 'coordinates', 
      lat: suggestion.lat, 
      lon: suggestion.lon,
      name: suggestion.name 
    });
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.keyCode === 13) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[activeSuggestion]);
    }
    else if (e.keyCode === 38) {
      e.preventDefault();
      if (activeSuggestion > 0) {
        setActiveSuggestion(activeSuggestion - 1);
      }
    }
    else if (e.keyCode === 40) {
      e.preventDefault();
      if (activeSuggestion < suggestions.length - 1) {
        setActiveSuggestion(activeSuggestion + 1);
      }
    }
    else if (e.keyCode === 27) {
      setShowSuggestions(false);
    }
  };

  const formatLocation = (suggestion) => {
    const parts = [suggestion.name];
    if (suggestion.state) parts.push(suggestion.state);
    parts.push(suggestion.country);
    return parts.join(', ');
  };

  return (
    <div className="search-bar">
      <div className="header-container">
        <h1>Weather Finder</h1>
        <Help />
      </div>
      
      <CountrySelector 
        selectedCountry={country}
        onCountryChange={setCountry}
      />

      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder={`Enter a city name (e.g., ${country === 'GB' ? 'London' : country === 'US' ? 'New York' : 'Paris'})`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="city-input"
          />
          <button
            type="button"
            onClick={handleSearchSuggestions}
            className="search-icon-button"
            disabled={isLoading || city.length < 2}
            title="Search for cities"
          >
            🔍
          </button>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={`${suggestion.lat}-${suggestion.lon}-${index}`}
                  className={index === activeSuggestion ? 'active' : ''}
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  {formatLocation(suggestion)}
                </li>
              ))}
            </ul>
          )}

          {showSuggestions && city.length >= 2 && suggestions.length === 0 && (
            <ul className="suggestions-list">
              <li className="no-results">No cities found</li>
            </ul>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isLoading || !city.trim()}
          className="search-button"
        >
          {isLoading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;