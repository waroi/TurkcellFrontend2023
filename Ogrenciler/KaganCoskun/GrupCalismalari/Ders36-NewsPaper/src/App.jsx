import { useEffect, useState } from 'react'
import './App.css'
import { getNews } from './services/requets'

function App() {
const [news, setNews] = useState([])


  useEffect(() => {
    getNews("general","1","tr").then((data) =>setNews(data))
  }, [])

  console.log(news)

  return (
    <>
      
    </>
  )
}

export default App
