import { useState, useEffect } from "react";

const Weather = ({ data }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const weatherHandler = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=082d40dcff70c31b4110a71337d0e26a`
        );
        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (error) {
        console.error("Hava durumu alınamadı:", error);
      }
    };

    weatherHandler();
  }, [data]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  // Veriyi her gün için ilk tahmin olacak şekilde filtreleyelim.
  let day = new Date().getDate();
  let filteredData = weather.list.filter((item) => {
    let itemDay = new Date(item.dt_txt).getDate();
    if (itemDay !== day) {
      day = itemDay;
      return true;
    }
    return false;
  });

  return (
    <div>
      <h1>{weather.city.name}</h1>
      {filteredData.map((item, index) => (
        <div key={index}>
          <h2>{new Date(item.dt_txt).toLocaleDateString()}</h2>
          <p>Temperature: {item.main.temp}</p>
          <p>Condition: {item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Weather;
