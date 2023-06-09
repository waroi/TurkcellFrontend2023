/* eslint-disable react/prop-types */
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
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const backgrounds = {
    Rain: "https://r4.wallpaperflare.com/wallpaper/342/808/970/glass-drops-rain-moisture-wallpaper-68922af1066bb76772452b9889c891cd.jpg",
    Clouds:
      "https://c1.wallpaperflare.com/path/399/588/997/air-sky-cloud-background-e6d84994e7079e8fcb7183cf5d64429b.jpg",
    Clear:
      "https://c1.wallpaperflare.com/path/998/702/367/clouds-cumulus-cumulus-clouds-summer-day-0717a2f49f566261a5f8b0a925da1c1b.jpg",
    Snow: "https://r4.wallpaperflare.com/wallpaper/134/401/152/apple-ios-snow-mountains-wallpaper-138b780d7045339d3b45764656178828.jpg",
    default:
      "https://r4.wallpaperflare.com/wallpaper/134/37/127/seasons-spring-summer-winter-wallpaper-d970483dd10acd3b96d7b8ef8051269d.jpg",
  };
  useEffect(() => {
    if (!city) return;
    const fetch = new Fetch();
    setLoading(true);
    setTimeout(() => {
      fetch.getWeather(city).then((response) => {
        if (response == "404" || response == undefined) {
          setLoading(false);
          setErr(true);
          return;
        }
        setErr(false);
        setToday(response.shift());
        setWeekday(response);
        setLoading(false);
      });
    }, 600);
  }, [city]);

  const Background = styled.div`
    background-image: url(${(props) => !props.status || props?.err ? backgrounds["default"] : backgrounds[props.status]});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  `;

  const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 700px) {
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
    min-height: 100vh;

  `;

  const Error = styled.div`
    font-size: 32px;
    color: white;
    text-align: center;
  `;
  const Loading = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      background: #fff;
      animation: loading 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      &:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
      }
      &:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
      }
      &:nth-child(3) {
        left: 56px;
        animation-delay: 0;
      }

      @keyframes loading {
        0% {
          top: 8px;
          height: 64px;
        }
        50%,
        100% {
          top: 24px;
          height: 32px;
        }
      }
    }
  `;

  return (
    <Background status={today.status} err={err}>
      <Container>
        <Body>
          <StyledHeader setCity={setCity} />
          {loading ? (
            <Loading>
              <div></div>
              <div></div>
              <div></div>
            </Loading>
          ) : err ? (
            <Error>Aradığınız Şehir Bulunamadı.</Error>
          ) : (
            <StyledWeather today={today} weekday={weekday} />
          )}
        </Body>
      </Container>
    </Background>
  );
}

export default App;
