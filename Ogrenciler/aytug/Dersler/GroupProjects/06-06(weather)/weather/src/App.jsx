import { useEffect } from 'react';
import './App.css'
import { getWeatherData } from './services/api'

function App() {
// console.log(getWeatherData("izmir"));
useEffect(()=>{
  const city = getWeatherData("izmir");
  console.log(city)},[])

  return (
    <>
    
    </>
  )
}

export default App
