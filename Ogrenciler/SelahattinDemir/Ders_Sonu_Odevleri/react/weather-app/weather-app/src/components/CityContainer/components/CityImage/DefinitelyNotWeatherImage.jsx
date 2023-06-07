/* eslint-disable react/prop-types */
import styled from "styled-components";

const DefinitelyNotWeatherImage = ({ weather }) => {
  const StyledImg = styled.img`
    width: 150px;
  `;
  return (
    <div>
      {weather.main && (
        <div>
          <StyledImg
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default DefinitelyNotWeatherImage;
