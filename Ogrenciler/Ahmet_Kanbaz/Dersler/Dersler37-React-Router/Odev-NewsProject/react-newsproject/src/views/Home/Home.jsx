import { useState, useEffect } from 'react'
import SingleNewCard from './SingleNewCard'
import {AllNewsContainer} from './HomeandCardStyle'

const Home = () => {

  const [allNews, setAllNews] = useState([])

  const getNewsDatas = async() => {
    const response = await fetch('https://api.collectapi.com/news/getNews?country=tr&tag=general', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'apikey 6BYoNNxAhL1Lb94WTcWd0q:5nIQ1u4JjTAYKxc8qOYD2n'
      }
    })
    const data = await response.json()
    setAllNews(data.result)
  }

  useEffect(() => {
    getNewsDatas()
  }, [])

  return (
    <AllNewsContainer>
      {
        allNews.length > 0 && allNews.map((singleNew) => <SingleNewCard singleNew={singleNew} key={singleNew.key}/>)
      }
    </AllNewsContainer>
  )
}

export default Home
