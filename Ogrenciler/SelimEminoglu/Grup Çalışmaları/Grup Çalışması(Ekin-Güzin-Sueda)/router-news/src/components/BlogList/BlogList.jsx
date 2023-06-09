import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../Slider/Slider'
import "./style.css"
const BlogList = ({newsArr}) => {
    let kelimeler = "";
    let ilkUcKelime = "";
    let name;
  return (
    <div>
         <Slider/>
         <ul className='blogList'>
         {newsArr.map((news,index)=>(
      <Link key={index} to={`/blogs/${news.key}`}><li>
         <div class = "card">
    <img src={news.image} alt=""/>
    <div class="card-content">
      <h2>       
       {news.name.split(" ").slice(0,3).join(" ")}...
      </h2>
      <p>
        {news.description.slice(0,50)}...
      </p>
      <a href="#" class="button">
        Devamı...   
      </a>
    </div>
  </div>
        </li></Link>     
    ))   
    }
    </ul>
    </div>
  )
}

export default BlogList