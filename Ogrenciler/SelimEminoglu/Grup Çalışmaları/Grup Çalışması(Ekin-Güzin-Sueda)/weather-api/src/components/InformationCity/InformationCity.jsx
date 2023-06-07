/* eslint-disable react/prop-types */
import DetailCity from "../DetailCity/DetailCity";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import { Container, Dflex, WeatherIcon, CityNameArea, Row, CityName, DateforDay } from './styleInformationCity.js'

function InformationCity({ weather }) {
  if (!weather) {
    return null;
  }
  return (
    <Container>
      <Dflex>
        <div>

          <CityNameArea>
            <CityName>{weather?.city}</CityName>
            <DateforDay>{weather?.result[0].date}</DateforDay>
          </CityNameArea>
          <Row>
            <div>
              <WeatherIcon src={weather?.result[0].icon} alt="images" />
            </div>
            <div>
              <DetailCity weather={weather} />
            </div>
          </Row>
        </div>


      </Dflex>
      <WeeklyWeather weather={weather} />
    </Container>
  );
}

export default InformationCity;
