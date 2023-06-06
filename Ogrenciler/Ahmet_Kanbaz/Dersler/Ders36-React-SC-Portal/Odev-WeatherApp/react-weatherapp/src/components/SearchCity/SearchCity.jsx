import PropTypes from "prop-types";
import styled from 'styled-components'
import SingleWeatherCard from "../WeatherCard/SingleWeatherCard";

const SearchCity = ({ weatherDatas, cityName }) => {

  const CityCard = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem 3rem;
    background: rgba( 255, 255, 255, .5 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( .1px );
    -webkit-backdrop-filter: blur( .1px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: #000000;
  `;

  const CityDailyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const CityCardAllDays = styled(CityDailyInfo)`
    gap: 1.2rem;
  `;

  const CityCardImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  `;

  const CityCardDegree = styled.span`
    font-size: 7rem;
  `;

  const CityCardHumi = styled.span`
    font-size: 2.4rem;
    font-weight: 700;
    opacity: .8;
    font-style: italic;
  `;
  return (
    <CityCard>
      <h3>{cityName?.value}</h3>
      <span>Yıldız</span>
      <p>{weatherDatas[0]?.status}</p>
      <CityDailyInfo>
        <CityCardImage src={weatherDatas[0]?.icon} alt="" />
        <CityCardDegree>{Math.round(weatherDatas[0]?.degree)}°</CityCardDegree>
        <CityCardHumi>{weatherDatas[0]?.humidity}%</CityCardHumi>
      </CityDailyInfo>
      <CityCardAllDays>
        {weatherDatas.map((weatherData) => (
          <SingleWeatherCard key={weatherData.date} weatherData={weatherData} />
        ))}
      </CityCardAllDays>
    </CityCard>
  );
};

SearchCity.propTypes = {
  weatherDatas: PropTypes.array.isRequired,
  cityName: PropTypes.object
};

export default SearchCity;
