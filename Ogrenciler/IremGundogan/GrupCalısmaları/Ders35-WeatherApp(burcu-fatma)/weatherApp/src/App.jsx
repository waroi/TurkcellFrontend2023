import { useState } from "react";
import Styles from "./App.module.css";
import Weather from "./components/Weather";

function App() {
  const [cityWeather, setCityWeather] = useState({});
  const weatherHandler = async (city) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=082d40dcff70c31b4110a71337d0e26a`
    ).then((res) => res.json()).then((data) => setCityWeather(data));
  };
  const citySearch = () => {
    const city = document.querySelector("input").value;
    console.log(city)
    weatherHandler(city);
    console.log(cityWeather.name)
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.app}>
          <div>
            <h2>Weather</h2>
            <input placeholder="Search for a city"></input>
            <button onClick={citySearch}>ara</button>
          </div>
          <div>
            <div className={Styles.city}></div>
            <div className={Styles.country}></div>
          </div>
        </div>
        {cityWeather && <Weather data={cityWeather}/> }
      </div>
    </>
  );
}

export default App;
