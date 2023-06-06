import PropTypes from "prop-types";
const SingleWeatherCard = ({ weatherData }) => {
  return (
    <div>
      <img src={weatherData.icon} alt={weatherData.description} />
      <p>{weatherData.date}</p>
      <p>{weatherData.day}</p>
      <p>{weatherData.description}</p>
      <p>{weatherData.status}</p>
      <p>{Math.round(weatherData.degree)}</p>
      <p>{weatherData.humidity}%</p>
      <p>{Math.round(weatherData.min)}</p>
      <p>{Math.round(weatherData.night)}</p>
      <p>{Math.round(weatherData.max)}</p>
    </div>
  );
};

SingleWeatherCard.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default SingleWeatherCard;
