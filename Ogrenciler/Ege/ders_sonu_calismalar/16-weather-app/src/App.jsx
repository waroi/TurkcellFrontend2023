import { useState, useEffect } from "react";
import styled from "styled-components";
import Fetch from "./models/Fetch";
import StyledHeader from "./components/Header/StyledHeader";
import StyledWeather from "./components/Weather/StyledWeather";

// import Fetch from "./models/Fetch";
function App() {
  const [today, setToday] = useState({});
  const [weekday, setWeekday] = useState([]);
  const [city, setCity] = useState("");
  const backgrounds = {
    Rainy:
      "https://get.wallhere.com/photo/sunset-water-reflection-sky-rain-water-on-glass-weather-drop-wave-flock-computer-wallpaper-70107.jpg",
  };
  useEffect(() => {
    if (!city) return;
    const fetch = new Fetch();
    fetch.getWeather(city).then((response) => {
      setToday(response.shift());
      setWeekday(response);
    });
  }, [city]);

  const Background = styled.div`
    background-image: url(${(props) => backgrounds[props.status]});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  `;

  const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 600px) {
      max-width: 100%;
      padding: 0 1rem;
    }
  `;
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  return (
    <Background status={today.status}>
      <Container>
        <Body>
          <StyledHeader setCity={setCity} />
          <StyledWeather today={today} weekday={weekday} />
        </Body>
      </Container>
    </Background>
  );
}

export default App;
