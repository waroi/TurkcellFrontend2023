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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const backgrounds = {
    Rain:
      "https://r4.wallpaperflare.com/wallpaper/342/808/970/glass-drops-rain-moisture-wallpaper-68922af1066bb76772452b9889c891cd.jpg",
    Clouds:
      "https://c1.wallpaperflare.com/path/399/588/997/air-sky-cloud-background-e6d84994e7079e8fcb7183cf5d64429b.jpg",
    Clear:
      "https://c1.wallpaperflare.com/path/998/702/367/clouds-cumulus-cumulus-clouds-summer-day-0717a2f49f566261a5f8b0a925da1c1b.jpg",
    Snow:
      "https://r4.wallpaperflare.com/wallpaper/134/401/152/apple-ios-snow-mountains-wallpaper-138b780d7045339d3b45764656178828.jpg",
    // Rain:
    //   "https://as1.ftcdn.net/v2/jpg/01/19/10/00/1000_F_119100073_bbP1qP0Nq2YRUtfE5DfFEEXtsMjLdNu5.jpg",
    // Clouds:
    //   "https://as2.ftcdn.net/v2/jpg/05/13/26/73/1000_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg",
    // Clear:
    //   "https://as1.ftcdn.net/v2/jpg/00/68/64/42/1000_F_68644233_tVUgwY9yPHEuB1QuZMby89eWMNOWICf1.jpg",
    // Snow:
    //   "https://as2.ftcdn.net/v2/jpg/01/30/24/67/1000_F_130246761_XVWbg4AGgGu7SlcKi2QPR23J03U710mP.jpg",
  };
  useEffect(() => {
    if (!city) return;
    const fetch = new Fetch();
    setLoading(true)
    setTimeout(() =>{
      fetch.getWeather(city).then((response) => {
        if(response == "404" || response == undefined){
          setLoading(false);
          setError(true);
          return;
        }
        setError(false)
        setToday(response.shift());
        setWeekday(response);
        setLoading(false);
      });
    },500)
  }, [city]);

  const Background = styled.div`
    background-image: url(${(props) => backgrounds[props.status]});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;`;

  const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    @media screen and (max-width: 600px) {
      max-width: 100%;
      padding: 0 1rem;
    }`;
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;
    width: 100%;`;

  const Error = styled.div`
  font-size:24px;
  `
  const Loading = styled.div`
  font-size: 24px;
  `

  return (
    <Background status={today.status}>
      <Container>
        <Body>
          <StyledHeader setCity={setCity} />
          {
            loading ? <Loading>Yükleniyor</Loading>
            : error ? <Error>Hata</Error>
            : <StyledWeather today={today} weekday={weekday} />
          }
        </Body>
      </Container>
    </Background>
  );
}

export default App;
