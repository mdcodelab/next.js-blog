import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";

function Weather() {
  return (
    <div className="search">
      <div className="search-top">
        <FaLocationDot></FaLocationDot>
        <div className="location">Tbilisi</div>
      </div>

      <div className="search-location">
        <input type="text" placeholder="Enter location"></input>
        <FaSearchLocation></FaSearchLocation>
      </div>

      <div className="weather-data">
        <i className="bx bxs-sun"></i>
        <div className="weather-type">Clear</div>
        <div className="temp">28&#176;</div>
      </div>
    </div>
  );
}

export default Weather
