import { useState } from "react";
import "./App.css";
import { getWeather } from "./utils/Request";
import SearchCity from "./components/SearchCity/SearchCity";
import InformationCity from "./components/InformationCity/InformationCity";

function App() {
  const [weather, setWeather] = useState("");
  const [searchValue, setSearchValue] = useState("ankara");

  async function fetchWeather() {
    const data = await getWeather(searchValue);
    setWeather(data);
    setSearchValue("");
  }

  return (
    <>
      <SearchCity
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fetchWeather={fetchWeather}
      />
      {weather.success && searchValue != null && (
        <InformationCity weather={weather} />
      )}
      {searchValue.length == 0 && <h3>Şehir İsmi Giriniz</h3>}
    </>
  );
}

export default App;
