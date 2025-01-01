"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function Weather() {
  const [data, setDate]=useState({});

  const search = async () => {

  }

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <IoLocationSharp className="location-icon"></IoLocationSharp>
          <div className="location">Tbilisi</div>
        </div>

        <div className="search-location">
          <input type="text" placeholder="Enter location" value={data} />
          <FaSearchLocation className="icon-search" />
        </div>
      </div>

      <div className="weather-data">
        <i className="bx bxs-sun"></i>
        <div className="weather-type">Clear</div>
        <div className="temp">28&#176;</div>
      </div>
    </div>
  );
}

export default Weather;
