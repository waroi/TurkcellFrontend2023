import PropTypes from "prop-types";
import {
  CityCard,
  CityDailyInfo,
  CityCardAllDays,
  CityCardImage,
  CityCardDegree,
  CityCardHumi,
} from "./Style";
import SingleWeatherCard from "../WeatherCard/SingleWeatherCard";

const SearchCity = ({ weatherDatas, cityName }) => {
  return (
    <CityCard>
      <h3>{cityName?.value}</h3>
      <p>{weatherDatas[0]?.status}</p>
      <CityDailyInfo>
        <CityCardImage src={weatherDatas[0]?.icon} alt="" />
        <CityCardDegree>{Math.round(weatherDatas[0]?.degree)}°</CityCardDegree>
        <CityCardHumi>{weatherDatas[0]?.humidity}%</CityCardHumi>
      </CityDailyInfo>
      <CityCardAllDays>
        {weatherDatas.slice(1).map((weatherData) => (
          <SingleWeatherCard key={weatherData.date} weatherData={weatherData} />
        ))}
      </CityCardAllDays>
    </CityCard>
  );
};

SearchCity.propTypes = {
  weatherDatas: PropTypes.array.isRequired,
  cityName: PropTypes.object,
};

export default SearchCity;
