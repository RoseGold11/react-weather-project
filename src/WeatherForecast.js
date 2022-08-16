import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "273153af3368a75612078eb8bf930780";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
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
