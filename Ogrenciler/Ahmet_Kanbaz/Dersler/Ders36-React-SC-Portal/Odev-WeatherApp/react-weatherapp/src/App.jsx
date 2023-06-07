import { useRef, useState } from "react";
// import CurrentCity from "./components/CurrentCity/CurrentCity";
import SearchCity from "./components/SearchCity/SearchCity";
import {FormContainer, SearchForm, SearchInput, SearchButton} from './components/AppStyle/Style'
import CurrentCity from "./components/CurrentCity/CurrentCity";
function App() {
  const inputRef = useRef(null);
  const [weatherDatas, setWeatherDatas] = useState([]);

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
      {/* <CurrentCity /> */}
    </FormContainer>
  );
}

export default App;
