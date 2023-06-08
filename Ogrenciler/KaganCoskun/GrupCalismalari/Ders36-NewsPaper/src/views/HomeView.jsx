import { useEffect, useState } from 'react'
import { getNews } from '../services/requets'
import { Link, useParams } from 'react-router-dom'
import NewsContainer from "../components/News/NewsContainer/NewsContainer"
import Slider from "../components/Slider/Slider"
import { NewsContainerDiv } from '../components/News/NewsContainer/styled'
import NewsCards from '../components/News/NewsCards/NewsCards'


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
          {/* {!sliderLoad && sliderNews && sliderNews?.result?.map((item)=><li key={item.key}><Link to={`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}>{item.name}</Link></li>)} */}
          <Slider/>
        </ul>
      </div>

      <div>
        {cardLoad && <div>Card loading</div>}
             <NewsContainerDiv >
                {!cardLoad && news && news?.result?.map((item)=><NewsCards key={item.key}  news={item} />)}
              </NewsContainerDiv>
       
      </div>

        <button disabled={page === 1 ?true:false} onClick={()=>{setPage(page-1);setCardLoad(true)}}>Önceki Sayfa</button>
        <button onClick={()=>{setPage(page+1);setCardLoad(true)}}>Sonraki Sayfa</button>
      
       
          {/* <NewsCards /> */}
        
    </div>
  )
}

export default HomeView
 
{/* <Link key={item.key} to={`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}><NewsCards  news={item} /></Link> */}