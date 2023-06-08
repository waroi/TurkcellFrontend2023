import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getNews } from "../services/requets"


const CategoryView = () => {
    const { category } = useParams()
    const [news, setNews] = useState()


    useEffect(() => {
        getNews(category,"1","tr").then((data) =>setNews(data))
      }, [category])

      console.log(news)

  return (
    <ul> {news && news?.result?.map(item=><Link key={item.key} to={`newsDetail/${item.key}`}>{item.name}</Link>)}</ul>
  )
}

export default CategoryView