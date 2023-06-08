import { useState, useEffect } from 'react'
import NewsItem from './Newscast/NewsItem'

const News = () => {
    useEffect(() => {
        fetchItems()
    }, [])
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        const data = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4a055a5ef0a747b88f3745500b4eb756")
        const news = await data.json()
        console.log(items)
        setItems([...items, ...news.articles])
    }
   
  return (
    <div>
        {items.map((article,index) => {
          return (
            <NewsItem key={index} id={article.title}  article={article} title={article.title} image={article.urlToImage} content={article.content} description={article.description} publish={article.publishedAt} author={article.author}/>
          )
        })}
         
    </div>
  )
}

export default News