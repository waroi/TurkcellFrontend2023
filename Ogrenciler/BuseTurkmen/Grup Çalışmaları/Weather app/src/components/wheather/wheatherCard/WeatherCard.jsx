import { Card, CardTitle } from "./weatherCardStyle"
import PropTypes from 'prop-types';

const WeatherCard = ({weather, getDays}) => {
  return (
    <Card>
      <h2>{getDays(weather?.dt)}</h2>
      <img src={`./assets/${weather?.weather[0]?.icon}.svg`} alt='sun'></img>
      <CardTitle>{weather?.weather[0]?.description}</CardTitle>
      <CardTitle>{weather?.main?.temp}°C</CardTitle>
    </Card>
  )
}



WeatherCard.propTypes = {
  weather: PropTypes.shape({
    dt: PropTypes.number,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
  }),
  getDays: PropTypes.func.isRequired,
};

export default WeatherCard