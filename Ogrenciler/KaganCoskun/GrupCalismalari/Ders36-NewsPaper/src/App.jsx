import { useEffect, useState } from 'react'
import './App.css'
import { getNews } from './services/requets'
import Router from './routers/Router'
import Header from './components/Header'
function App() {
const [news, setNews] = useState([])


  useEffect(() => {
    getNews("general","1","tr").then((data) =>setNews(data))
  }, [])

  console.log(news)

  return (
    <>
     <Header/>
      <Router />
      <footer></footer>
    </>
  )
}

export default App
