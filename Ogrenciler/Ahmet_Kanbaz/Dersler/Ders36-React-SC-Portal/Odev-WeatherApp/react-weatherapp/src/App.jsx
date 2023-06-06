import { useRef, useState } from "react";
// import CurrentCity from "./components/CurrentCity/CurrentCity";
import SearchCity from "./components/SearchCity/SearchCity";
import styled from 'styled-components'
function App() {
  const inputRef = useRef(null);
  const [weatherDatas, setWeatherDatas] = useState([]);

  const FormContainer = styled.div`
    display: flex;
    width: 1280px;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
  `;

  const SearchForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
  `;

  const SearchInput = styled.input`
    width: 60%;
    padding: 7px 15px;
    border-radius: 7px;
    background: transparent;
    border-color: #cecece;
    outline: none;
  `;

  const SearchButton = styled.button`
    padding: 7px 15px;
    border-radius: 7px;
    background-color: #2fc5bb;
    color: #ffffff;
    cursor: pointer;
    border: none;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: #119e95;
    }
  `;

  const getWeatherDatas = async () => {
    const cityName = inputRef.current.value;
    const response = await fetch(
      `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${cityName.toLowerCase()}`,
      {
        method: "GET",
        headers: {
          authorization: "apikey 2TWKmwyldWAQKmk8QtgMau:0rGLjPPbK8yYs9SaNqUSsX",
          "content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    setWeatherDatas(data.result);
  };

  return (
    <FormContainer>
      <h2>Weather App</h2>
      <SearchForm>
        <SearchInput type="text" ref={inputRef} />
        <SearchButton type="button" onClick={getWeatherDatas}>
          Search
        </SearchButton>
      </SearchForm>
      {
        weatherDatas.length > 0 && <SearchCity weatherDatas={weatherDatas} cityName={inputRef.current} />
      }
      {/*  <CurrentCity getWeatherDatas={getWeatherDatas} /> */}
    </FormContainer>
  );
}

export default App;
