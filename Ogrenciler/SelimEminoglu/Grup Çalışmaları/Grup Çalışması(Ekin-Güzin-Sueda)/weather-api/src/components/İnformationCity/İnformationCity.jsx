function İnformationCity({ weather }) {
  console.log(weather);
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <p>{weather?.city}</p>
          {}
          <p>{weather?.result[0].date}</p>
        </div>
      </div>
      <div className="img">
        <img src={weather?.result[0].icon} alt="images" />
      </div>
      {weather?.result[0]}
    </div>
  );
}

export default İnformationCity;
