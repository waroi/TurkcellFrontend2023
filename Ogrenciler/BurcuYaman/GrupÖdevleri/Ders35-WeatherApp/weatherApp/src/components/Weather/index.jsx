import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const index = ({cityData}) => {
  console.log(cityData);
  const [weather, setWeather] = useState([]);

  // const weatherHandler = async (city) => {
  //   await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=082d40dcff70c31b4110a71337d0e26a`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data));
  // };

  // weatherHandler(cityData);

  useEffect(() => {
    async function fetchWeather() {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&appid=082d40dcff70c31b4110a71337d0e26a`).then(
        (res) => res.json().then((data) => setWeather(data))
      );
    }
    fetchWeather();
  }, [cityData]);


  return (
    
    <div>
      <h1>{weather.cnt}</h1>
    </div>
  );
};

index.propTypes = {
  user: PropTypes.object,
};


export default index;
