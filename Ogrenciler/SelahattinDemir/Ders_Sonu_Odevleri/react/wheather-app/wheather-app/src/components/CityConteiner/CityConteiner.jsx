/* eslint-disable react/prop-types */
import CityItem from "./components/CityItem/CityItem"
import CityImage from "./components/CityImage/CityImage"

const CityConteiner = ({weather}) => {
  console.log(weather);

  return (
    <div>
      {weather.main && (
        <div>
          <h1>{weather.name}</h1>
          <CityImage weather={weather} />
          <h3>Hava Durumu: {weather.weather[0].description}</h3>
          <CityItem weather={weather} />
        </div>
      )}
    </div>
  )
}

export default CityConteiner