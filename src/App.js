import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://clever-almeida-63b7f4.netlify.app/index.html"
            target="_blank"
          >
            Rachael Moten
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/RoseGold11/react-weather-project"
            target="_blank"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
