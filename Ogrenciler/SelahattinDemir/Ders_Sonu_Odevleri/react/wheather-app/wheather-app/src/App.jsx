import { useState } from 'react'
import SearchArea from './components/SearchArea/SearchArea'
import CityConteiner from './components/CityConteiner/CityConteiner'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const cityName = city.trim();
  const url = 'https://api.openweathermap.org/data/2.5/';
  const key = '9340803c129e2b2c1f30a56f8e5536e4';

  const handleFetchWeather = async () => {
    const response = await fetch(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`)
    const data = await response.json()
    setWeather(data)
  }

  console.log(cityName)

  return (
    <>
      <SearchArea city={city} setCity={setCity} handleFetchWeather={handleFetchWeather} />
      <CityConteiner weather={weather} />
    </>
  )
}

export default App
