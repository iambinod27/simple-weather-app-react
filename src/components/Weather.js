import React from "react";
import "../styles/weather.scss";

function Weather({
  cityName,
  temperature,
  humidity,
  weather,
  main,
  sunrise,
  sunset,
  country,
  wind,
}) {
  const celsius = Math.floor(temperature - 273.15);
  const fahrenheit = Math.floor(((temperature - 273.15) * 9) / 5 + 31);
  const mph = Math.floor(wind * 2.237);

  return (
    <>
      <header>
        <h1>
          {cityName}, {country}
        </h1>
        <h2>
          Weather : {main}, {weather}
        </h2>
      </header>
      <section>
        <h2>
          <i className="fas fa-temperature-low"></i>
          Temperature: {celsius}&deg;C / {fahrenheit}&deg;F
        </h2>
        <ul>
          <li>Humidity : {humidity} %</li>
          <li>Sunrise: {sunrise}</li>
          <li>Sunset : {sunset}</li>
          <li>Wind : {mph} mph</li>
        </ul>
      </section>
    </>
  );
}

export default Weather;
