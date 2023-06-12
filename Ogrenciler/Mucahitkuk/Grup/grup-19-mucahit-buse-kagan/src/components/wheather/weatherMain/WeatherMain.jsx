import PropTypes from 'prop-types';
import { IconImg, Title, WheatherInfo, MinTemp, MaxTemp,TempDiv, WeatherIcon } from './weatherMainStyle'
import { BiWind, BiDroplet} from "react-icons/bi";
import { FiSunset, FiSunrise } from "react-icons/fi";



const WeatherMain = ({weather, getDays}) => {


  return (
    <>
        <WheatherInfo >
            <IconImg src={`./assets/${weather?.list[0].weather[0]?.icon}.svg`} alt='sun' />
            <Title>{weather?.list[0]?.weather[0]?.description}</Title>
            <h2>Sıcaklık: {weather?.list[0]?.main?.temp} °C / Hissedilen: {weather?.list[0]?.main?.feels_like} °C</h2>
        </WheatherInfo>
        <WheatherInfo >
            <h1>{weather?.city?.name}</h1>
            <br></br>
            <h2>{getDays(weather?.list[0]?.dt)}</h2>
            <TempDiv>
            <MinTemp>{weather?.list[0]?.main?.temp_min} °C </MinTemp>/<MaxTemp> {weather?.list[0]?.main?.temp_max} °C</MaxTemp>
            </TempDiv>
            <WeatherIcon><BiDroplet></BiDroplet> {weather?.list[0]?.main?.humidity}%</WeatherIcon>
            <WeatherIcon><BiWind /> {weather?.list[0]?.wind?.speed} km/s</WeatherIcon>
            <WeatherIcon><FiSunrise />{new Date(weather?.city?.sunrise * 1000).toLocaleTimeString()} | {new Date(weather?.city?.sunset * 1000).toLocaleTimeString()}   <FiSunset /></WeatherIcon>

        </WheatherInfo>
    </> 
  )
}

WeatherMain.propTypes = {
  weather: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            icon: PropTypes.string,
            description: PropTypes.string,
          })
        ),
        main: PropTypes.shape({
          temp: PropTypes.number,
          feels_like: PropTypes.number,
          temp_min: PropTypes.number,
          temp_max: PropTypes.number,
          humidity: PropTypes.number,
        }),
        wind: PropTypes.shape({
          speed: PropTypes.number,
        }),
      })
    ),
    city: PropTypes.shape({
      name: PropTypes.string,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }),
  }),
  getDays: PropTypes.func.isRequired,
};


export default WeatherMain