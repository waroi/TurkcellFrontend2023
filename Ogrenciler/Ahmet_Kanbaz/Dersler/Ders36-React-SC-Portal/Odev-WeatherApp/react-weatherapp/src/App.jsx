import { useRef, useEffect, useState } from "react";
// import CurrentCity from "./components/CurrentCity/CurrentCity";
import SearchCity from "./components/SearchCity/SearchCity";
function App() {
  const inputRef = useRef(null);
  const [weatherDatas, setWeatherDatas] = useState([]);

  const getWeatherDatas = async () => {
    const cityName = inputRef.current.value;
    const response = await fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${cityName.toLowerCase()}`,
      {
        method: "GET",
        headers: {
          authorization: "apikey 2TWKmwyldWAQKmk8QtgMau:0rGLjPPbK8yYs9SaNqUSsX",
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    setWeatherDatas(data.result);
  };

  return (
    <>
      <h2>Weather App</h2>
      <form>
        <input type="text" ref={inputRef} />
        <button type="button" onClick={getWeatherDatas}>
          Search
        </button>
      </form>
      <SearchCity weatherDatas={weatherDatas} />
      {/*  <CurrentCity getWeatherDatas={getWeatherDatas} /> */}
    </>
  );
}

export default App;
