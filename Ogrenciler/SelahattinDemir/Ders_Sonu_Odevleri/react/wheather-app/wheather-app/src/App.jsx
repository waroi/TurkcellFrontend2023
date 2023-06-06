import { useState } from "react";
import SearchArea from "./components/SearchArea/SearchArea";
import CityConteiner from "./components/CityConteiner/DefinitelyNotCityContainer";
import "./App.css";

function App() {
  const key1 = "SMl54G9ggZ9ziZDr64f5bIa5umEt6BGy6rSPioPfA84";
  const key2 = "vjC_bfH7TT-Yy5rDOVCxZ2O9UGxCDVooWZgOofd5Cxw";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  const url = "https://api.openweathermap.org/data/2.5/";
  const key = "9340803c129e2b2c1f30a56f8e5536e4";

  const body = document.getElementById("body");
  body.style.backgroundImage = `url(${imageUrl})`;

  const handleFetchWeather = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`
    );
    const data = await response.json();
    setWeather(data);
    setCity("");
    const imageResponse = await fetch(
      `https://api.unsplash.com/photos/random?query=${city}&orientation=landscape&client_id=${key1}`
    );
    if (imageResponse.ok) {
      const data = await imageResponse.json();
      const image = data.urls.regular;
      setImageUrl(image);
    } else {
      throw new Error("Bir hata oluştu");
    }
  };

  return (
    <>
      <img
        src="https://cdn.discordapp.com/attachments/1089995629633228900/1115614339181850744/SAS.png"
        alt=""
        id="logo"
      />
      <SearchArea
        city={city}
        setCity={setCity}
        handleFetchWeather={handleFetchWeather}
      />
      <CityConteiner weather={weather} />
    </>
  );
}

export default App;
