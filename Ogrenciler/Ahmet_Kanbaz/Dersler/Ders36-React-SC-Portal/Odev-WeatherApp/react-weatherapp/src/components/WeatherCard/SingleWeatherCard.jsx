import PropTypes from "prop-types";
import {SingleCardInfo, SingleCardMaxDegree, SingleCardMinDegree} from './StyleSingleCard'
const SingleWeatherCard = ({ weatherData }) => {
  return (
    <SingleCardInfo>
      <p>{weatherData.day}</p>
      <img src={weatherData.icon} alt={weatherData.description} width='20px'/>
      <p>{Math.round(weatherData.degree)}°</p>
      <div>
        <SingleCardMaxDegree>{Math.round(weatherData.max)}°</SingleCardMaxDegree>
        <SingleCardMinDegree>{Math.round(weatherData.min)}°</SingleCardMinDegree>
      </div>
    </SingleCardInfo>
  );
};

SingleWeatherCard.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default SingleWeatherCard;
