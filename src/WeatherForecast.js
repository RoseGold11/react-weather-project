import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day mb-1 mt-1">Tue</div>
          <span className="forecast-icon">
            <WeatherIcon code="01d" color="white" size={30} />
          </span>
          <div className="forecast-temp mt-1 mb-1">
            <span className="forecast-temp-max">82°</span>{" "}
            <span className="forecast-temp-min">63°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
