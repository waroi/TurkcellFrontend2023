import PropTypes from "prop-types";
import styled from 'styled-components'
const SingleWeatherCard = ({ weatherData }) => {
  function addCardLocalStorage() {
    let cardList = JSON.parse(localStorage.getItem("weatherCardList")) || [];
    cardList.push(weatherData);
    localStorage.setItem("weatherCardList", JSON.stringify(cardList));
  }

  const SingleCardInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <SingleCardInfo>
      <p>{weatherData.day}</p>
      <img src={weatherData.icon} alt={weatherData.description} width='20px'/>
      <p>{Math.round(weatherData.degree)}°</p>
    </SingleCardInfo>
  );
};

SingleWeatherCard.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default SingleWeatherCard;
