import { useEffect, useState } from "react";
import "./styles/app.scss";
import Weather from "./components/Weather";

function App() {
  const [cityName, setCityName] = useState([]);
  const [temp, setTemp] = useState([]);
  const [weathers, setWeathers] = useState([]);
  const [sun, setSun] = useState([]);
  const [wind, setWind] = useState([]);
  const [error, setError] = useState();

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Kathmandu");

  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=40185ec46c31216c911aef8c2b9788e1`
    );
    const data = await response.json();

    if (!data.name) {
      alert("city not found");
    } else {
      setCityName(data);
      setTemp(data.main);
      setWeathers(data.weather);
      setSun(data.sys);
      setWind(data.wind);
    }
  };

  useEffect(() => {
    getWeather();
  }, [query]);

  const getCity = (e) => {
    return setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      return alert("Enter Your City!!!");
    }

    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <form onSubmit={getSearch} className="form">
            <label>
              <input
                type="text"
                placeholder="Enter Your City..."
                value={search}
                onChange={getCity}
              />
              <button className="btn">Search</button>
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
        </div>
      </div>
    </>
  );
}

export default App;
