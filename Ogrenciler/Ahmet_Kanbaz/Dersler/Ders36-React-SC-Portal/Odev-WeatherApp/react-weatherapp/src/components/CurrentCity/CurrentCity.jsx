import { useState, useEffect } from "react";
const CurrentCity = () => {
  const [currentLocation, setCurrentLocation] = useState([0]);
  const [long, setLong] = useState([0]);
  const [currentLocationWeather, setCurrentLocationWeather] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude, position.coords.longitude);
      setLong(position.coords.longitude);
      setCurrentLocation(position.coords.latitude);
    });
    console.log(currentLocation - long);

    const getCurrentCityWeatherDatas = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation}&lon=${long}&appid=5a9887854f41e5c7752c6dd70fa176f7&units=metric`
      );
      const data = await response.json();
      setCurrentLocationWeather(data);
    };
    currentLocation ? (long ? getCurrentCityWeatherDatas() : null) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div>
      <p>sıcaklık: {currentLocationWeather?.main?.temp}</p>
    </div>
  );
};

export default CurrentCity;
