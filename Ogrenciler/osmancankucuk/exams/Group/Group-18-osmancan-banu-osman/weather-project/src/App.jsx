import "./App.css";
import WeatherFormm from "./components/WeatherForm/WeatherForm";
import WeatherInfoo from "./components/WeatherInfo/WeatherInfo";
import { useEffect, useState } from "react";
import { Div } from "./appStyle";

function App() {
  const [weather, setWeather] = useState();
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="row align-items-center h-100">
          <div className="col-md-5">
            <WeatherFormm weather={weather} setWeather={setWeather} />
          </div>
          <div className="col-md-7">
            {weather && <WeatherInfoo weather={weather} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
