import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>°
        <span className="unit">
          F |{" "}
          <a href="/" onClick={showCelcius}>
            C
          </a>
        </span>
      </span>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(celcius)}</span>°
        <span className="unit">
          C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </span>
    );
  }
}
