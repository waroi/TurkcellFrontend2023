/* eslint-disable react/prop-types */


const CityImage = ({weather}) => {
  return (
    <div>
      {weather.main && (
        <div>
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
        </div>
        )
      }
    </div>
  )
}

export default CityImage