/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { DeatilPageContainer, DetailPageImageDiv, DetailPageInfo, DetailPageButton } from './DetailNewStyle'
import NotFound from "../../NotFound/NotFound"
const DetailNew = () => {
  const [news, setNews] = useState(null)
  const location = useLocation()
  const { id } = useParams()

  const getNewsDatas = async () => {
    const response = await fetch('https://api.collectapi.com/news/getNews?country=tr&tag=general', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'apikey 6BYoNNxAhL1Lb94WTcWd0q:5nIQ1u4JjTAYKxc8qOYD2n'
      }
    })
    const data = await response.json()
    setNews(data.result[id])
  }

  useEffect(() => {
    if (location.state) {
      return setNews(location.state)
    }
    getNewsDatas();
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  };
  if (news === null) {
    return (
      <DeatilPageContainer>
        Loading
      </DeatilPageContainer>
    )
  }
  return (
    news ? (
      <DeatilPageContainer>
        <DetailPageImageDiv>
          <img src={news.image} alt={news.name} />
        </DetailPageImageDiv>
        <DetailPageInfo>
          <h1>{news.name}</h1>
          <p>{news.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sint laborum sunt porro cumque fugit dolore, voluptatibus, ullam vel dicta praesentium nam sequi aliquid, aliquam exercitationem ipsam. Labore, vero mollitia? Consequuntur natus reprehenderit minima, repudiandae consectetur cupiditate dicta, adipisci est voluptatem nulla fuga obcaecati expedita. Eius cupiditate culpa obcaecati. Itaque!</p>
          <DetailPageButton>
            <span>{formatDate(news.date)}</span>
            <a href={news.url} target="_blank" rel="noreferrer">{news.source}</a>
          </DetailPageButton>
        </DetailPageInfo>
      </DeatilPageContainer>
    )
      :
      <NotFound />
  )
}

export default DetailNew
