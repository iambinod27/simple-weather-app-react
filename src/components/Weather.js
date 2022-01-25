import React from "react";

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
      <div>
        <h1>
          {cityName}, {country}
        </h1>
        <h2>{main}</h2>
        <p>{weather}</p>
        <p>
          temperature: {celsius} C / {fahrenheit} F
        </p>
        <p>Humidity : {humidity} %</p>
        <p>sunrise: {sunrise}</p>
        <p>sunset : {sunset}</p>
        <p>wind : {mph} mph</p>
      </div>
    </>
  );
}

export default Weather;
