import { useState, useEffect } from "react";
import {
  CityCard,
  CityDailyInfo,
  FeelsDegree,
  CityCardDegree,
  CityCardHumi,
} from "../SearchCity/Style";
const CurrentCity = () => {
  const [lat, setLat] = useState([0]);
  const [long, setLong] = useState([0]);
  const [currentLocationWeather, setCurrentLocationWeather] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLong(position.coords.longitude);
      setLat(position.coords.latitude);
    });

    const getCurrentCityWeatherDatas = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5a9887854f41e5c7752c6dd70fa176f7&units=metric`
      );
      const data = await response.json();
      setCurrentLocationWeather(data);
    };
    lat ? (long ? getCurrentCityWeatherDatas() : null) : null;
  }, [lat, long]);
  return (
    <CityCard>
      <h2>Bulunduğunuz Konum: {currentLocationWeather?.name}</h2>
      <CityDailyInfo>
        <CityCardDegree>
          {Math.round(currentLocationWeather?.main?.temp)}°
        </CityCardDegree>
        <CityCardHumi>{currentLocationWeather?.main?.humidity}%</CityCardHumi>
      </CityDailyInfo>
      <FeelsDegree>
        Hissedilen Sıcaklık: {currentLocationWeather?.main?.feels_like}
      </FeelsDegree>
    </CityCard>
  );
};

export default CurrentCity;
