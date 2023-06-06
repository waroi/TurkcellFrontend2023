import {useRef, useEffect, useState} from 'react'
import CurrentCity from './components/CurrentCity/CurrentCity'
function App() {
  const inputRef = useRef(null)
  const [location, setLocation] = useState({lat: null, long: null})
  const [weatherDatas, setWeatherDatas] = useState({})

  const getLocationLatandLong = async() => {
    const cityName = inputRef.current.value;
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=5a9887854f41e5c7752c6dd70fa176f7`)
    const data = await response.json();
    setLocation({
      lat: data[0].lat,
      long: data[0].lon
    })
  }

  useEffect(() => {
    const getWeatherDatas = async() => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.long}&exclude=current,hourly,minutely,alerts&units=metric&appid=5a9887854f41e5c7752c6dd70fa176f7`)
      const data = await response.json()
      setWeatherDatas(data)
    }
    location.lat ? location.long ? getWeatherDatas() : null : null
  }, [location])

  return (
    <>
      <h2>Weather App</h2>
      <form>
        <input type="text" ref={inputRef} />
        <button type='button' onClick={getLocationLatandLong}>Search</button>
      </form>
      <CurrentCity />
    </>
  )
}

export default App
