"use client";
import React from "react";
import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios";

function Weather() {
  const [myData, setMyData] = useState({});
  const [location, setLocation] = useState("");

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=627b30decf96c6628b5879ee45253ede&units=metric`;
    const response = await axios.get(url);
    console.log("Response:", response.data);
    setLocation("");
    setMyData(response.data);
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
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

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <IoLocationSharp className="location-icon"></IoLocationSharp>
          <div className="location">{myData?.name}</div>
        </div>

        <div className="search-location">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleInputChange}
          />
          <FaSearchLocation className="icon-search" onClick={search} />
        </div>
      </div>

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
