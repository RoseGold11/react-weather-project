import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn" />
          </div>
        </div>
      </form>
      <div className="row heading">
        <div className="col-6">
          <h1>New York</h1>
        </div>
        <div className="col-6 weather-image">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="Sunny"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="weather-day">
            <li>Tuesday 14:43</li>
            <li>Sunny</li>
            <li>ローズゴールド</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
