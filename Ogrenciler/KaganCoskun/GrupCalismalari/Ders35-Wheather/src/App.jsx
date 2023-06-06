import { useEffect, useState } from 'react'
import './App.css'
import WheatherWrap from './components/Wheather/WheatherWrap'
import Search from './components/search/Search'
import {getWheatherByCity,getLocation,getWheatherByLocation} from './services/wheatherService'

function App() {
  const [wheather, setWheather] = useState([])
  const [search, setSearch] = useState('')


  const handleSearch = async (city) => {
    console.log(search)
    const data = await getWheatherByCity(city?city:search)
     setWheather(data)
    }

  useEffect(() => {

    async function getDatas() {
     const data = await getLocation()
     const city = await getWheatherByLocation(data.latitude, data.longitude)
     handleSearch(city)
    }

    getDatas();
  }, [])

console.log(wheather)

  return (
    <div className='bg-cloud'>
      <div className='container'>
       <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />
       {wheather &&<WheatherWrap wheather={wheather}/>}
      </div>
    </div>
  )
}

export default App
