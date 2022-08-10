import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WEather Info">
      <div className="row heading">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6 weather-image">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          °<span className="unit">F | C</span>
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
            <li>Precipitation: 15%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
