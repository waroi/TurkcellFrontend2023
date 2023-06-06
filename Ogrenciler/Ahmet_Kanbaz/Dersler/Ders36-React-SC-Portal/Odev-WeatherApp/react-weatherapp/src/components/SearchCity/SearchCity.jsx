import PropTypes from "prop-types";
import SingleWeatherCard from "../WeatherCard/SingleWeatherCard";

const SearchCity = ({ weatherDatas }) => {
  return (
    <>
      {weatherDatas.map((weatherData) => (
        <SingleWeatherCard key={weatherData.date} weatherData={weatherData} />
      ))}
    </>
  );
};

SearchCity.propTypes = {
  weatherDatas: PropTypes.array.isRequired,
};

export default SearchCity;
