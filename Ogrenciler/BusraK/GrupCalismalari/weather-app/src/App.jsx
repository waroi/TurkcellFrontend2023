import React, { useState, useRef } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import "./App.css";
import InputCity from "./components/InputCity";
import { weatherForecast } from "./utilities/WeatherAPI";
import WeatherShow from "./components/Weather/WeatherShow";
import Loader from "./components/Loader";

const StyledApp = styled.div`
  background-image: ${({ theme }) => `url(${theme.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-position: center;
  transition: 0.5s;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttonTextColor};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
  height: 40px;
  background-color: #003566;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }

  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;

function App() {
  const [theme, setTheme] = useState({
    backgroundImage:
      "https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", // Varsayılan arka plan resmi
    buttonBackgroundColor: "#fdd835",
    buttonTextColor: "#000",
  });
  const handleButtonClick = () => {
    const randomBackgroundImage = getRandomBackgroundImage();

    setTheme((prevTheme) => ({
      ...prevTheme,
      backgroundImage: randomBackgroundImage,
    }));
  };

  const getRandomBackgroundImage = () => {
    const backgroundImageUrls = [
      "https://i.pinimg.com/originals/4f/7b/af/4f7baf9d24aa5ca3a8c98d7dec85576c.gif",
      "https://i.pinimg.com/originals/78/7c/b4/787cb463a2395515f1e8e4f62a5886d8.gif",
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGM5MzFjZDc0NmMxZGQ3ODlmMDE1NmU3YzdlNDIyM2EzYTE3Y2E3MCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/VdKEHcPsjrlQv9Cv5n/giphy.gif",
      "https://media4.giphy.com/media/lMxZqO8aXQddpzrbxq/giphy.gif?cid=ecf05e47flw33gekriixzty9pojxulvoet4ixmp6yro49uu3&ep=v1_gifs_related&rid=giphy.gif&ct=g",
      "https://i.pinimg.com/originals/19/18/60/191860353cd89cf82b0026f5fc1efa7e.gif",
      "https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1462524500090-89443873e2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ];

    const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
    return backgroundImageUrls[randomIndex];
  };

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

  return (
    <ThemeProvider theme={theme}>
      <StyledApp temperature={temperatureRef.current}>
        <div>
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
          <Button onClick={handleButtonClick}>Change bg</Button>

          {state.loading === true ? (
            <Loader />
          ) : (
            <div>
              {state.current !== undefined ? (
                <div>
                  <div>
                    <WeatherShow
                      today={state.current}
                      weekly={state.weekInfo}
                    />
                  </div>
                </div>
              ) : state.error ? (
                <p>
                  Sorry! We don't have any information on the specified
                  location.
                </p>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
