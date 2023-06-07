import { useState } from "react";

const Weather = (cityData) => {
  const [weather, setWeather] = useState({});

  const weatherHandler = async (city) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=082d40dcff70c31b4110a71337d0e26a`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };

  weatherHandler(cityData.data);

  return <div>{weather}</div>;
};

export default Weather;
