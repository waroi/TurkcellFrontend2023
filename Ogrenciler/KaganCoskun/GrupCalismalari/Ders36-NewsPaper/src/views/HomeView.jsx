import { useEffect, useState } from 'react'
import { getNews } from '../services/requets'
import { Link, useParams } from 'react-router-dom'

const HomeView = () => {
    const { category } = useParams()



    const [sliderNews, setSliderNews] = useState()
    const [news, setNews] = useState()
    const [sliderLoad, setSliderLoad] = useState(true)
    const [cardLoad, setCardLoad] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
      setSliderLoad(true)
      setCardLoad(true)
        getNews(category?category:"general","0","tr").then((data) =>setSliderNews(data)).then(()=>setSliderLoad(false)).then(()=>setPage(1))
      }, [category])

    useEffect(() => {
        getNews(category?category:"general",page,"tr").then((data) =>setNews(data)).then(()=>setCardLoad(false))
      }, [page,category])

    
  return (
    <div>
      <div>
        {sliderLoad && <div>Slider loading</div>}
        <ul>
          {!sliderLoad && sliderNews && sliderNews?.result?.map((item)=><li key={item.key}><Link to={`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}>{item.name}</Link></li>)}
        </ul>
      </div>

      <div>
        {cardLoad && <div>Card loading</div>}
        <ul>
          {!cardLoad && news && news?.result?.map((item)=><li key={item.key}><Link to={`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}>{item.name}</Link></li>)}
        </ul>
      </div>

        <button disabled={page === 1 ?true:false} onClick={()=>{setPage(page-1);setCardLoad(true)}}>Önceki Sayfa</button>
        <button onClick={()=>{setPage(page+1);setCardLoad(true)}}>Sonraki Sayfa</button>
    </div>
  )
}

export default HomeView