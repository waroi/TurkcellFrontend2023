import React, { useEffect, useState } from "react";
import "./App.css";
import { getWeather } from "./utils/Request";
import SearchCity from "./components/SearchCity/SearchCity";
import İnformationCity from "./components/İnformationCity/İnformationCity";

function App() {
  const [weather, setWeather] = useState("");
  const [searchValue, setSearchValue] = useState("");

  async function fetchWeather() {
    const data = await getWeather(searchValue);
    setWeather(data);
    console.log(data?.result[0].date);
  }

  return (
    <>
      <SearchCity
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fetchWeather={fetchWeather}
      />
      <İnformationCity weather={weather} />
    </>
  );
}

export default App;
