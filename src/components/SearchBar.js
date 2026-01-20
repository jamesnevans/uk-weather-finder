import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="search-bar">
      <h1>UK Weather Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a UK city name (e.g., London, Manchester)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={isLoading}
          className="city-input"
        />
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