import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [coin, setCoin] = useState()

  useEffect(() => {
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/category",{
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY":"76ba70b0-3d99-4975-bf60-c56c850d8aaf"
      }
    }).then(data=>data.json()).then(data=>setCoin(data))
    
  }, [])

  console.log(coin)


  return (
    <>
     
    </>
  )
}

export default App
