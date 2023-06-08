import { useRef, useState } from "react";
import SearchCity from "./components/SearchCity/SearchCity";
import {
  FormContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  Toast,
} from "./components/AppStyle/Style";
import CurrentCity from "./components/CurrentCity/CurrentCity";
function App() {
  const inputRef = useRef(null);
  const [weatherDatas, setWeatherDatas] = useState([]);
  const [error, setError] = useState(false);

  const getWeatherDatas = async () => {
    setWeatherDatas([]);
    setError(false);
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
    if (data.success === false) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setWeatherDatas(data.result);
  };

  return (
    <FormContainer>
      <h2>Weather App</h2>
      <SearchForm>
        <SearchInput
          type="text"
          ref={inputRef}
          placeholder="Şehir Adı Giriniz..."
        />
        <SearchButton type="button" onClick={getWeatherDatas}>
          Search
        </SearchButton>
      </SearchForm>
      {error ? (
        <Toast>
          <h3>Şehir Bulunamadı Geçerli Bir Şehir adı Giriniz!</h3>
        </Toast>
      ) : (
        weatherDatas?.length > 0 && (
          <SearchCity weatherDatas={weatherDatas} cityName={inputRef.current} />
        )
      )}
      <CurrentCity />
    </FormContainer>
  );
}

export default App;
