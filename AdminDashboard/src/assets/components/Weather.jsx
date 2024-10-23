import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ setWeatherData }) => {
  const [city, setCity] = useState('New York');
  const apiKey = 'e9d0894878d7839e7ee86b14a4a20094'; // Replace with your actual OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data); // Pass data up to parent component
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); // Fetch every minute
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Search city" 
      />
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
};

export default Weather;
