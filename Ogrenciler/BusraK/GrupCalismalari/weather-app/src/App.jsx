import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import InputCity from "./components/InputCity";
import { weatherForecast } from "./utilities/WeatherAPI";
import WeatherShow from "./components/Weather/WeatherShow";
import Loader from "./components/Loader";

function App() {
  const [bg, setBg] = useState("defaultBg");
  const bgs = ["defaultBg", "clearBg", "rainBg", "cloudsBg", "snowBg"];
  const [location, setLocation] = useState("Istanbul");
  const [state, setState] = useState({
    value: "",
    current: undefined,
    weekInfo: [],
    loading: false,
    error: false,
  });

  const temperatureRef = useRef(0);

  const handleInputChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleSearchCity = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    });

    weatherForecast(state.value)
      .then((response) => {
        setLocation(response[1]);
        return fetch(response[0]);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Failed to fetch weather data. Error: " + response.status
          );
        }
        return response.json();
      })
      .then((data) => {
        if (!data || !data.daily || data.daily.length === 0) {
          throw new Error("Invalid weather data received.");
        }

        const dailyData = data.daily;

        const currentTemperature = dailyData[0].temp.day;
        temperatureRef.current = currentTemperature;

        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;

        const sunset = new Date(dailyData[0].sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 4);
        const sunrise = new Date(dailyData[0].sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 4);

        const current = {
          date,
          desc: dailyData[0].weather[0].description,
          main: dailyData[0].weather[0].main,
          icon: dailyData[0].weather[0].icon,
          temp: dailyData[0].temp.day,
          hTemp: dailyData[0].temp.max,
          lTemp: dailyData[0].temp.min,
          sunrise,
          sunset,
          clouds: dailyData[0].clouds,
          humidity: dailyData[0].humidity,
          wind: dailyData[0].wind_speed,
          pressure: dailyData[0].pressure,
        };
        //slice(0, 3)bak
        const weekData = dailyData.slice(1);

        const weekInfo = weekData.map((data, index) => {
          return {
            key: index,
            main: data.weather[0].main,
            day: new Date(data.dt * 1000)
              .toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              .slice(0, 3),
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
            hTemp: data.temp.max,
            lTemp: data.temp.min,
          };
        });

        setState({
          ...state,
          current,
          weekInfo,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error: true,
          current: undefined,
          weekInfo: [],
        });
      });
  };

  useEffect(() => {
    if (state.current !== undefined) {
      if (bgs.includes(state.current.main.toLowerCase() + "Bg")) {
        setBg(state.current.main.toLowerCase() + "Bg");
      }
    }
  }, [state.current]);

  return (
        <div className={bg}>
          {state.weatherData && (
            <div>
              <h2>{state.value}</h2>
            </div>
          )}

          <InputCity
            value={state.value}
            data={state}
            showResult={(state.weatherInfo || state.error) && true}
            change={handleInputChange}
            submit={handleSearchCity}
          />
          {state.loading === true ? (
            <Loader />
          ) : (
            <div>
              {state.current !== undefined ? (
                
                <div>
                    <WeatherShow
                    name = {location}
                      today={state.current}
                      weekly={state.weekInfo}
                    />
                  </div>
                
              ) : state.error ? (
                <p>
                  Sorry! We don't have any information on the specified
                  location.
                </p>
              ) : (
               <></>
              )}
            </div>
          )}
        </div>
  );
}

export default App;
