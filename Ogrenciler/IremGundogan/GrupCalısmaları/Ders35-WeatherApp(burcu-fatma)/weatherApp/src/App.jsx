import { useState } from "react";
import Weather from "./components/Weather";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: #f7f7f7;
`;

const AppDiv = styled.div`
  margin: 1em;
  padding: 1em;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: 0.5em;
`;

const SearchButton = styled.button`
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState(null);

  const weatherHandler = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=082d40dcff70c31b4110a71337d0e26a`
      );
      const data = await response.json();
      setCityWeather(data);
    } catch (error) {
      console.error("Hava durumu alınamadı:", error);
    }
  };

  const citySearch = () => {
    weatherHandler();
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <Container>
      <AppDiv>
        <div>
          <h2>Weather</h2>
          <SearchInput
            placeholder="Search for a city"
            value={city}
            onChange={handleInputChange}
          />
          <SearchButton onClick={citySearch}>ara</SearchButton>
        </div>
        {cityWeather && <Weather data={cityWeather} />}
      </AppDiv>
    </Container>
  );
}

export default App;
