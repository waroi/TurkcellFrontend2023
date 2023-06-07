import { Card, CardDetail } from "./WeatherInfoStyle";
import PropTypes from "prop-types";

const WeatherInfoo = ({ weather }) => {
  console.log();
  return (
    <div>
      <Card>
        <div className="text-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />

          <h1>{weather.name} </h1>
          <div className="d-flex justify-content-center">
            <h2 className="me-3">
              {Math.round(weather.main.temp)}
              <span>&#176;</span>C
            </h2>
            <h2> {weather.weather[0].main}</h2>
          </div>
        </div>
        <CardDetail className="row mt-3 x-1">
          <div className="col-6">
            <ul className="list-unstyled">
              <li>
                <h5> Wind Speed: {Math.round(weather.wind.speed)}</h5>
              </li>
              <li>
                <h5>
                  Feels Like: {Math.round(weather.main.feels_like)}
                  <span>&#176;</span>C{" "}
                </h5>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="list-unstyled">
              <li>
                <h5>Wind Degree: {weather.wind.deg}</h5>{" "}
              </li>
              <li>
                <h5>Humidity: {weather.main.humidity} </h5>
              </li>
            </ul>
          </div>
        </CardDetail>
      </Card>
    </div>
  );
};
WeatherInfoo.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherInfoo;
