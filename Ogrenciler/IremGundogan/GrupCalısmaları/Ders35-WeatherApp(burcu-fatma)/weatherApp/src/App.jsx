import { useState } from "react";
import Styles from "./App.module.css";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState(null);

  const weatherHandler = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=082d40dcff70c31b4110a71337d0e26a`
      );
      const data = await response.json();
      setCityWeather(data);
    } catch (error) {
      console.error("Hava durumu alınamadı:", error);
    }
  };

  const citySearch = () => {
    weatherHandler();
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.app}>
        <div>
          <h2>Weather</h2>
          <input
            placeholder="Search for a city"
            value={city}
            onChange={handleInputChange}
          ></input>
          <button onClick={citySearch}>ara</button>
        </div>
        <div>
          <div className={Styles.city}></div>
          <div className={Styles.country}></div>
        </div>
      </div>
      {cityWeather && <Weather data={cityWeather} />}
    </div>
  );
}

export default App;
