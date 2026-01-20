import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="help-container">
      <button
        className="help-icon"
        onClick={() => setShowHelp(!showHelp)}
        title="Help"
        type="button"
      >
        ?
      </button>

      {showHelp && (
        <>
          <div className="help-overlay" onClick={() => setShowHelp(false)}></div>
          <div className="help-popup">
            <button className="help-close" onClick={() => setShowHelp(false)}>×</button>
            <h3>How to Use Weather Finder</h3>
            <div className="help-content">
              <div className="help-step">
                <span className="step-number">1</span>
                <p><strong>Select your country</strong> from the "Country" dropdown menu.</p>
              </div>
              
              <div className="help-step">
                <span className="step-number">2</span>
                <p><strong>Enter a city name</strong> in the search box.</p>
              </div>
              
              <div className="help-step">
                <span className="step-number">3</span>
                <div>
                  <p><strong>Choose your search method:</strong></p>
                  <ul>
                    <li><strong>Direct search:</strong> Simply click "Get Weather" to search for your city immediately.</li>
                    <li><strong>Browse suggestions:</strong> Click the magnifying glass icon 🔍 to see a list of matching cities, then select the one you want before clicking "Get Weather".</li>
                  </ul>
                </div>
              </div>
              
              <div className="help-tip">
                <strong>💡 Tip:</strong> Use the magnifying glass when searching for cities with similar names (like "Devon" or "Portland") to find the exact location you need!
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Help;