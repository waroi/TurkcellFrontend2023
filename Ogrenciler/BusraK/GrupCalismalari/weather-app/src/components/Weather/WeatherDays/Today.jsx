import pressure from "../../../assets/barometer.svg";
import wind_speed from "../../../assets/windsock.svg";
import humidity from "../../../assets/humidity.svg";
import sunrise from "../../../assets/sunrise.svg";
import sunset from "../../../assets/sunset.svg";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const WeatherCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 8px;
  max-width: 400px;
  min-width: 350px;
  max-height: 400px;
  min-height: 200px;
  background: rgba(0, 53, 102, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.2px);
  &:hover {
    background: rgba(0, 53, 102, 0.31);
    scale: 1.1;
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const WeatherData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const WeatherIcon = styled.img`
  margin-right: 10px;
`;
const WeatherDataCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

function Today({ today, name}) {
  return (
    <div>
      <CardContainer>
        
        <WeatherCard>
          <h2>{name}</h2>
          <WeatherIcon
            src={`https://openweathermap.org/img/w/${today.icon}.png`}
            alt={today.icon}
          />
          <WeatherInfo>
            <div>{today.temp}°C</div>
            <div>
              {today.main}, {today.desc}
            </div>
          </WeatherInfo>
        </WeatherCard>
        <WeatherCard>
          <WeatherData>
            <img src={sunrise} />
            <span>{today.sunrise} A.M.</span>
          </WeatherData>
          <WeatherData>
            <img src={sunset} />
            <span>{today.sunset} P.M.</span>
          </WeatherData>
          <WeatherDataCard>
            <WeatherData>
              <img src={pressure} />
              <span>{today.pressure} hPa</span>
            </WeatherData>
            <WeatherData>
              <img src={humidity} />
              <span>{today.humidity} %</span>
            </WeatherData>
            <WeatherData>
              <img src={wind_speed} />
              <span>{today.wind} m/s N</span>
            </WeatherData>
          </WeatherDataCard>
        </WeatherCard>
      </CardContainer>
    </div>
  );
}

export default Today;
