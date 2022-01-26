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

  const converter = (unix) => {
    const date = new Date(unix * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = `${hours} : ${minutes.substr(-2)} : ${seconds.substr(
      -2
    )}`;
    return formattedTime;
  };

  const rise = converter(sunrise);
  const set = converter(sunset);

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
          <li>
            Humidity <p> {humidity} %</p>
          </li>
          <li>
            Sunrise <p>{rise}</p>
          </li>
          <li>
            Sunset <p>{set}</p>
          </li>
          <li>
            Wind <p>{mph} mph</p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Weather;
