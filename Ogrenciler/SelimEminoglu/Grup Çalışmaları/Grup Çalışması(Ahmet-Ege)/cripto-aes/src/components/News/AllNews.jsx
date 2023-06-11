/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import SingleNew from './SingleNew'
import {AllNewsContainer} from './NewsStyle'

const AllNews = ({ coinName }) => {
  const [allNews, setAllNews] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetch(`https://newsdata.io/api/1/news?apikey=pub_24328f864eec5add806531baa15247b1a5009&q=${coinName}&language=en`)
  //     .then(res => res.json())
  //     .then(data => setAllNews(data.results))
  //     .then(() => setLoading(false))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <AllNewsContainer>
      {loading ? <h1>Loading...</h1> : allNews.slice(0, 6).map((singleNew, index) => <SingleNew key={index} singleNew={singleNew} />)}
    </AllNewsContainer>
  )
}

export default AllNews
