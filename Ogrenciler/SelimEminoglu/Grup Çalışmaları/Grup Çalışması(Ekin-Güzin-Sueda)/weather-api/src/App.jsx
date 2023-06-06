import React, { useEffect, useState } from "react";
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
  }

  return (
    <>
      <SearchCity
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fetchWeather={fetchWeather}
      />
      <InformationCity weather={weather} />
    </>
  );
}

export default App;
