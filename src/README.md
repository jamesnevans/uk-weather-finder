# Weather Finder

A React application that displays current weather information for cities worldwide using the OpenWeatherMap API.

## Features

- Search for weather in cities from 30+ countries worldwide
- Country selector for filtering city searches
- City search suggestions with magnifying glass icon
- Display current weather conditions with animated backgrounds
- Show temperature (current, feels like, min, max) in Celsius
- Display humidity percentage
- Show wind speed in miles per hour
- Display rain volume for the last hour in millimeters
- Tabbed interface for organized data display (Temperature / Atmospheric Conditions)
- Animated weather backgrounds that change based on conditions (rain, snow, clear, cloudy, etc.)
- Error handling for incorrect city names
- Responsive design

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd uk-weather-finder
```

2. Install dependencies:
```bash
npm install
```

3. The API key is already included in the code (`src/services/weatherService.js`):
```javascript
const API_KEY = '6ea5bc5a33da45b5366d311f1a52d0bd';
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Running Tests

Run the test suite:
```bash
npm test
```

## Usage

1. Select a country from the dropdown menu (defaults to United Kingdom)
2. Enter a city name in the search box
3. (Optional) Click the magnifying glass 🔍 icon to see city suggestions
4. Click "Get Weather" button or press Enter
5. View the current weather information displayed below
6. Switch between "Temperature" and "Atmospheric Conditions" tabs to see different data

## Supported Countries

The application supports weather searches for cities in 30+ countries including:
- United Kingdom
- United States
- Canada
- Australia
- France
- Germany
- Spain
- Italy
- Japan
- And many more...

## Technologies Used

- React
- OpenWeatherMap API (Weather Data & Geocoding)
- CSS3 with animations
- Jest & React Testing Library

## API Key

**API Key:** `6ea5bc5a33da45b5366d311f1a52d0bd`

This key is included in the source code for evaluation purposes.

## Project Structure
```
src/
├── components/
│   ├── SearchBar.js          # Search input and country selector
│   ├── SearchBar.css
│   ├── WeatherDisplay.js     # Main weather display with tabs
│   ├── WeatherDisplay.css
│   ├── WeatherBackground.js  # Animated backgrounds
│   ├── WeatherBackground.css
│   ├── Tabs.js               # Tab component for organizing data
│   ├── Tabs.css
│   ├── CountrySelector.js    # Country dropdown selector
│   ├── CountrySelector.css
│   ├── ErrorMessage.js       # Error display component
│   └── ErrorMessage.css
├── services/
│   └── weatherService.js     # API integration and helper functions
├── App.js                    # Main application component
├── App.css
└── index.js
```

## Features Detail

### Weather Backgrounds
The background animates based on current weather conditions:
- **Clear/Sunny**: Bright gradient with glow effect
- **Cloudy**: Gray gradient with floating clouds
- **Rainy**: Blue background with falling raindrops
- **Snowy**: Winter gradient with falling snowflakes
- **Stormy**: Dark background with lightning flashes
- **Misty/Foggy**: Foggy overlay with moving mist

### Tabbed Interface
Weather data is organized into two tabs:
- **Temperature**: Current, Feels Like, Min, and Max temperatures
- **Atmospheric Conditions**: Humidity, Wind Speed, and Rain volume

## Future Enhancements

- 5-day weather forecast
- Weather history and trends
- Location-based auto-detection
- Favorite cities list
- Unit conversion (Celsius/Fahrenheit, mph/km/h)
- Weather alerts and warnings

## Development

Built as part of a front-end development exercise demonstrating:
- React component architecture
- API integration
- State management
- Error handling
- Responsive design
- Animated UI elements
- Git version control with regular commits