import { useState, useEffect } from 'react'
const CurrentCity = () => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    long: null
  })
  const [currentLocationWeather, setCurrentLocationWeather] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude)
      setCurrentLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    })
    console.log(currentLocation.lat - currentLocation.long)

    const getCurrentCityWeatherDatas = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentLocation.lat}&lon=${currentLocation.long}&exclude=current,hourly,minutely,alerts&units=metric&appid=5a9887854f41e5c7752c6dd70fa176f7`);
      const data = await response.json();
      setCurrentLocationWeather(data)
    }
    getCurrentCityWeatherDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  return (
    <div>
      {
        currentLocationWeather.length > 0 && <h1>{currentLocationWeather.timezone}</h1>
      }
    </div>
  );
};

export default CurrentCity;
