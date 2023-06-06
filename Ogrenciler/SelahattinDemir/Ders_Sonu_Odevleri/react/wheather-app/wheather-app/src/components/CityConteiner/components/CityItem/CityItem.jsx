/* eslint-disable react/prop-types */


const CityItem = ({weather}) => {
  return (
    <div>
      {weather.main && (
        <div>
          <h3>Nem: %{weather.main.humidity}</h3>
          <h3>Rüzgar: {weather.wind.speed} m/s</h3>
          <h3>
          Sıcaklık: {Math.floor(weather.main.temp)} °C</h3>
        </div>
        )
      }
    </div>
  )
}

export default CityItem