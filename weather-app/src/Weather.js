import React, { useState, useEffect } from 'react';
import './Weather.css'; // Import your CSS or styling here

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce94984b1e463fc38c1083dad3f121b3`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  return (
    <div className="weather-app">
      <div className="weather-content">
        <h1>Give me the weather</h1>
        <form>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          
        </form>
        {weatherData && (
  <div>
    <h2>{`Temperature: ${weatherData.main?.temp} °F`}</h2>
    <p>{`Humidity: ${weatherData.main?.humidity}%`}</p>
    <p>{`Wind Speed: ${weatherData.wind?.speed} m/s`}</p>
    <p>{`Description: ${weatherData.weather[0]?.description}`}</p>
  </div>
)}
      </div>
    </div>
  );
};

export default Weather;
