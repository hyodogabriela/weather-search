import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";


export default function SearchEngine() {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d0d344dc2295f5286d0c032b63b4baa&units=metric`;
  
      axios.get(url)
        .then(response => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
          setLoading(false);
        });
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    return (
      <div className="EngineContainer">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
        {loading ? (
          <p>Searching...</p>
        ) : weatherData ? (
          <div>
            <h2>The weather in {city} is</h2>
            <div className="UlContainer">
              <ul>
                <li>Temperature: {weatherData.main.temp} °C</li>
                <li>Description: {weatherData.weather[0].description}</li>
                <li>Humidity: {weatherData.main.humidity}%</li>
                <li>Wind: {weatherData.wind.speed} m/s</li>
                <li>Icon: <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" /></li>
              </ul>
            </div>
          </div>
        ) : (
          <p>Enter a city to search for weather</p>
        )}
      </div>
    );
  }