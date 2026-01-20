import React, { useState, useEffect, useCallback } from 'react';
import { searchCities } from '../services/weatherService';
import Autocomplete from './Autocomplete';
import './SearchBar.css';

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.length >= 2) {
        setIsSearching(true);
        const results = await searchCities(city);
        setSuggestions(results);
        setIsSearching(false);
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [city]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setSuggestions([]);
    }
  }, [city, onSearch]);

  const handleSelectSuggestion = useCallback((suggestion) => {
    const cityName = suggestion.name;
    setCity(cityName);
    setSuggestions([]);
    onSearch(cityName);
  }, [onSearch]);

  const handleInputChange = useCallback((value) => {
    setCity(value);
  }, []);

  return (
    <div className="search-bar">
      <h1>UK Weather Finder</h1>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          suggestions={suggestions}
          onSelect={handleSelectSuggestion}
          inputValue={city}
          onInputChange={handleInputChange}
          isLoading={isLoading || isSearching}
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