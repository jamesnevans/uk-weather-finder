import React, { useState, useEffect, useRef, memo } from 'react';
import './Autocomplete.css';

const Autocomplete = memo(({ suggestions, onSelect, inputValue, onInputChange, isLoading }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = (suggestion) => {
    onSelect(suggestion);
    setShowSuggestions(false);
    setActiveSuggestion(0);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (showSuggestions && suggestions.length > 0) {
        e.preventDefault();
        onSelect(suggestions[activeSuggestion]);
        setShowSuggestions(false);
      }
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
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    onInputChange(value);
    setShowSuggestions(true);
    setActiveSuggestion(0);
  };

  const formatLocation = (suggestion) => {
    const parts = [suggestion.name];
    if (suggestion.state) parts.push(suggestion.state);
    parts.push(suggestion.country);
    return parts.join(', ');
  };

  return (
    <div className="autocomplete-wrapper" ref={wrapperRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a UK city name (e.g., London, Manchester)"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        disabled={isLoading}
        className="city-input"
        autoComplete="off"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={`${suggestion.lat}-${suggestion.lon}-${index}`}
              className={index === activeSuggestion ? 'active' : ''}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onClick={() => handleClick(suggestion)}
            >
              {formatLocation(suggestion)}
            </li>
          ))}
        </ul>
      )}
      
      {showSuggestions && inputValue.length >= 2 && suggestions.length === 0 && !isLoading && (
        <ul className="suggestions-list">
          <li className="no-results">No cities found</li>
        </ul>
      )}
    </div>
  );
});

export default Autocomplete;