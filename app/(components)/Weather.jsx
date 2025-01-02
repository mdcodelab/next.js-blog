"use client";
import React, { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios";

function Weather() {
  const [myData, setMyData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=627b30decf96c6628b5879ee45253ede&units=metric`;
    try {
      const response = await axios.get(url);
      console.log("Response:", response.data);
      setMyData(response.data);
      setError("");
    } catch (err) {
      console.error("Error:", err.message);
      setError("Location not found. Please try again.");
      setMyData({});
    }
    setLocation("");
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const weatherIcons = {
    Clear: <i className="bx bxs-sun"></i>,
    Clouds: <i className="bx bxs-cloud"></i>,
    Rain: <i className="bx bxs-cloud-rain"></i>,
    Thunderstorm: <i className="bx bxs-cloud-lightning"></i>,
    Snow: <i className="bx bxs-cloud-snow"></i>,
    Default: <i className="bx bxs-cloud"></i>,
  };

  const getWeatherIcon = (weatherType) => {
    return weatherIcons[weatherType] || weatherIcons.Default;
  };

  // Locația implicită
  useEffect(() => {
    const fetchDefaultLocation = async () => {
      try {
        const defaultLocation = "Iasi";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&appid=627b30decf96c6628b5879ee45253ede&units=metric`;
        const response = await axios.get(url);
        console.log("Default location response:", response.data);
        setMyData(response.data);
      } catch (err) {
        console.error("Error fetching default location:", err.message);
        setError("Failed to load default location.");
      }
    };

    if (!myData.main) {
      fetchDefaultLocation();
    }
  }, [myData.main]);

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <IoLocationSharp className="location-icon"></IoLocationSharp>
          <div className="location">{myData?.name || "Enter a location"}</div>
        </div>

        <div className="search-location">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <FaSearchLocation className="icon-search" onClick={search} />
        </div>
      </div>

      {/* Afișează mesajul de eroare, dacă există */}
      {error && <div className="error-message">{error}</div>}

      {myData.main && (
        <div className="weather-data">
          {/* Afișarea dinamică a iconiței */}
          {getWeatherIcon(myData?.weather?.[0]?.main)}
          <div className="weather-type">
            {capitalizeFirstLetter(myData?.weather?.[0]?.description) || "N/A"}
          </div>
          <div className="temp">{Math.floor(myData.main.temp)}&#176;C</div>
        </div>
      )}
    </div>
  );
}

export default Weather;
