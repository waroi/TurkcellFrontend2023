import React, { useState } from "react";
import "./App.css";
import InputCity from "./components/InputCity";
import { weatherForecast } from "./utilities/WeatherAPI";
import WeatherShow from "./components/WeatherShow";
import Loader from "./Loader";

function App() {
  const [state, setState] = useState({
    value: "",
    current: undefined,
    weekInfo: [],
    loading: false,
    error: false,
  });

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
      .then((response) => fetch(response))
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
        console.error(error);
      });
  };

  return (
    <>
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
            <div className="weather">
              <WeatherShow today={state.current} weekly={state.weekInfo} />
            </div>
          ) : state.error ? (
            <p>
              Sorry! We do not have any information on the specified location.
            </p>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
