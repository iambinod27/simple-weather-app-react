import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [cityName, setCityName] = useState([]);
  const [temp, setTemp] = useState([]);
  const [weathers, setWeathers] = useState([]);
  const [sun, setSun] = useState([]);
  const [wind, setWind] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Kathmandu");

  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=40185ec46c31216c911aef8c2b9788e1`
    );
    const data = await response.json();
    setCityName(data);
    setTemp(data.main);
    setWeathers(data.weather);
    setSun(data.sys);
    setWind(data.wind);
  };

  useEffect(() => {
    getWeather();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <label>
          <input
            type="text"
            placeholder="Enter Your City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn">search</button>
        </label>
      </form>
      <Weather
        cityName={cityName.name}
        temperature={temp.temp}
        humidity={temp.humidity}
        weather={weathers.map((weather) => weather.description)}
        main={weathers.map((weather) => weather.main)}
        sunrise={sun.sunrise}
        sunset={sun.sunset}
        country={sun.country}
        wind={wind.speed}
      />
      ;
    </div>
  );
}

export default App;
