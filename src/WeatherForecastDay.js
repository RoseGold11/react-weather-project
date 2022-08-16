import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      {" "}
      <div className="forecast-day mb-1 mt-1">{day()}</div>
      <span className="forecast-icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          color="white"
          size={30}
        />
      </span>
      <div className="forecast-temp mt-1 mb-1">
        <span className="forecast-temp-max">{max()}</span>{" "}
        <span className="forecast-temp-min">{min()}</span>
      </div>
    </div>
  );
}
