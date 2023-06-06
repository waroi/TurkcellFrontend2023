import DetailCity from "../DetailCity/DetailCity";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import { Container, Dflex, WeatherIcon, CityNameArea } from './styleInformationCity.js'

function InformationCity({ weather }) {
  if (!weather) {
    return null;
  }
  return (
    <Container>
      <Dflex>
        <div>
          <CityNameArea>
            <p>{weather?.city}</p>
            <p>{weather?.result[0].date}</p>
          </CityNameArea>
          <div className="img">
            <WeatherIcon src={weather?.result[0].icon} alt="images" />
          </div>
        </div>
        <DetailCity weather={weather} />
      </Dflex>
      <WeeklyWeather />
    </Container>
  );
}

export default InformationCity;
