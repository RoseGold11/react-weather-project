import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="row heading mt-5 mb-5">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6 current-weather">
          <WeatherIcon code={props.data.icon} />
          <span className="visual-temperature">
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="weather-day">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>ローズゴールド</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like {Math.round(props.data.feels)}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
