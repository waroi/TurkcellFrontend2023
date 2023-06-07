import WeatherMain from "./weatherMain/WeatherMain.jsx"
import { CardContainer, WeatherContainer } from "./weatherStyle.js"
import WeatherCard from "./wheatherCard/WeatherCard.jsx"
import PropTypes from 'prop-types';


const WeatherWrap = ({weather}) => {
  
  let array = []

  function getDays(timestamp) {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = days[new Date(timestamp * 1000).getDay()]
    return date
  }

  for(let i = 3; i <weather?.list?.length; i+=8) {
    array.push(weather.list[i])
  }

  return (
    <div>
    <WeatherContainer>
      {weather?.list?.length>0 && <WeatherMain getDays={getDays} weather={weather} />}
    </WeatherContainer>
    <CardContainer>
    {weather?.list?.length>0 && array.slice(1,5).map((item,index)=><WeatherCard key={index} weather={item} getDays={getDays} />)}
    </CardContainer>
    </div>
  )
}

WeatherWrap.propTypes = {
  weather: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt: PropTypes.number,
        main: PropTypes.shape({
          temp: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            icon: PropTypes.string,
            description: PropTypes.string,
          })
        ),
      })
    ),
  }),
};

export default WeatherWrap