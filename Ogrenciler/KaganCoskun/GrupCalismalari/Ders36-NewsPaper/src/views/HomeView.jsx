import { useEffect, useState } from 'react'
import { getNews } from '../services/requets'
import { useParams } from 'react-router-dom'
import Slider from "../components/Slider/Slider"
import { NewsContainerDiv } from '../components/News/NewsContainer/styled'
import NewsCards from '../components/News/NewsCards/NewsCards'
import { SliderContainer } from './HomeViewStyled'


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

      console.log(news)
    
  return (
    <div>

          <SliderContainer>
            {sliderLoad && <div>Slider loading</div>}
            {!sliderLoad && sliderNews && <Slider news={sliderNews?.result} page={0} category={category}/>}
          </SliderContainer>
 
      <div>
        {cardLoad && <div>Card loading</div>}
             <NewsContainerDiv >
                {!cardLoad && news && news?.result?.map((item)=><NewsCards key={item.key} news={item} link={`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}/>)}
              </NewsContainerDiv>
      </div>
    <div style={{display:"flex", margin:"20px auto", justifyContent:"center", gap:"2rem"}}>
    <button disabled={page === 1 ?true:false} onClick={()=>{setPage(page-1);setCardLoad(true)}}>Önceki Sayfa</button>
        <button onClick={()=>{setPage(page+1);setCardLoad(true)}}>Sonraki Sayfa</button>
    </div>
        
    </div>
  )
}

export default HomeView
 

// {`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}