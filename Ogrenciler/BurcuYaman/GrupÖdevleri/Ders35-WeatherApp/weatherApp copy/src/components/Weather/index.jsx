import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";


const WeatherCity = styled.div`
margin-top:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:20px;
  padding: 1em;
  background-color: #f7f7f7;
`;

const Weather = ({ data }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const weatherHandler = async (cityData) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&appid=082d40dcff70c31b4110a71337d0e26a`
        );
        const weatherData = await response.json();
        setWeather(weatherData);
      } catch (error) {
        console.error("Hava durumu alınamadı:", error);
      }
    };

    weatherHandler(data);
  }, [data]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  // Veriyi bugün ve sonraki 4 günün verileri olacak şekilde filtreleyelim.
  let day = new Date().getDate();
  let count = 0;
  let dailyData = [];
  weather.list.forEach((item) => {
    let itemDay = new Date(item.dt_txt).getDate();
    if (itemDay === day && count === 0) {
      dailyData.push(item);
      count++;
    } else if (itemDay !== day) {
      day = itemDay;
      count++;
      if (count <= 5) {
        dailyData.push(item);
      }
    }
  });

  return (
    <WeatherCity>
      <h1>{weather.city.name}</h1>
      {dailyData.map((item, index) => (
        <div key={index}>
          <h2>{new Date(item.dt_txt).toLocaleDateString()}</h2>
          <p>Temperature: {(item.main.temp - 273.15).toFixed(1)}°C</p>
 
          <p>Condition: {item.weather[0].description}</p>
        </div>
      ))}
    </WeatherCity>
  );
};

Weather.propTypes = {
  data: PropTypes.object.isRequired
}


export default Weather;

