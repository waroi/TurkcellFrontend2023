/* eslint-disable react/prop-types */
import styled from "styled-components";

const DefinitelyNotCityItem = ({ weather }) => {
  const StyledDiv = styled.div`
    dislay: flex;
    gap: 100px;
    padding: 10px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    margin-bottom: 40px;
  `;

  const StyledSpans = styled.span`
    font-size: 24px;
    font-weight: bold;
  `;

  const StyledSpan = styled(StyledSpans)`
    margin-left: 10px;
    margin-right: 10px;
    border-left: 1px solid white;
    border-right: 1px solid white;
    padding-top: 20px;
    padding-bottom: 0px;
    padding-left: 15px;
    padding-right: 15px;
  `;

  return (
    <div>
      {weather.main && (
        <StyledDiv
          style={{ display: "flex", gap: "20px", justifyContent: "center" }}
        >
          <div>
            <span>Nem</span>
            <br />
            <StyledSpans> %{weather.main.humidity}</StyledSpans>
          </div>
          <div>
            <span>Rüzgar</span>
            <br />
            <StyledSpan>{weather.wind.speed} m/s</StyledSpan>
          </div>
          <div>
            <span>Sıcaklık</span>
            <br />
            <StyledSpans>{Math.floor(weather.main.temp)} °C</StyledSpans>
          </div>
        </StyledDiv>
      )}
    </div>
  );
};

export default DefinitelyNotCityItem;
