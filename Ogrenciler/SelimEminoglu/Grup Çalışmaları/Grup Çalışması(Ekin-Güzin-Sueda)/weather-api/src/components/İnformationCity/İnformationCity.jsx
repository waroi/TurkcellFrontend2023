import DetailCity from "../DetailCity/DetailCity";
import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";

function İnformationCity({ weather }) {
  if (!weather) {
    return null;
  }
  return (
    <div className="container">
      <div className="infoDetailDiv">
        <div className="infoDiv">
          <div className="row">
            <div className="col-3">
              <p>{weather?.city}</p>
              <p>{weather?.result[0].date}</p>
            </div>
          </div>
          <div className="img">
            <img src={weather?.result[0].icon} alt="images" />
          </div>
        </div>
        <DetailCity />
      </div>
      <WeeklyWeather />
    </div>
  );
}

export default İnformationCity;
