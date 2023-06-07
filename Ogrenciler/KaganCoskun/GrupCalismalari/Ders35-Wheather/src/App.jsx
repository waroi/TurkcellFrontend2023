import { useEffect, useState } from 'react'
import './App.css'
import WheatherWrap from './components/wheather/WeatherWrap'
import Search from './components/search/Search'
import {getWeatherByCity,getLocation,getWeatherByLocation} from './services/weatherService'
import NotFound from './components/notFound/NotFound'

function App() {
  const [weather, setWeather] = useState()
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)


  const handleSearch = async (city) => {
    const data = await getWeatherByCity(city?city:search)
    if(data.cod === '404' || data.cod === '400') {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000);
      return;
    }
     setWeather(data) 
    }

    

  useEffect(() => {

    async function getDatas() {
     const data = await getLocation()
     const city = await getWeatherByLocation(data.latitude, data.longitude)
     handleSearch(city)
    }

    getDatas();
  }, [])


  return (
    <div className='bg-cloud'>
      <div className='container'>
       <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />
       <NotFound error={error.toString()} />
       {weather &&<WheatherWrap weather={weather}/>}
      </div>
    </div>
  )
}

export default App
