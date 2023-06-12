import { useState, useEffect } from 'react'
import Card from './Card/Index';
import "./style.css"
import PropTypes from "prop-types";

const Body = ({page}) => {
  const [data, setData] = useState([])
  const [image, setImage] = useState([])
  useEffect(() => {

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const newData = await response.json();
        if(page == 1 ) {
          setData(newData.slice(0,25));
        } 
        if(page == 2) {
          setData(newData.slice(25,50));
         }
         if(page == 3) {
          setData(newData.slice(50,75));
         }
         if(page == 4) {
          setData(newData.slice(75,100));
         }
}
    const fetchImage = async () => { 
        const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=100`);
        const newImage = await response.json();
        if(page == 1 ) {
          setImage(newImage.slice(0,25));
        }
        if(page == 2 ) {
          setImage(newImage.slice(25,50));
        }
        if(page == 3 ) {
          setImage(newImage.slice(50,75));
        }
        if(page == 4 ) {
          setImage(newImage.slice(75,100));
        }
}
    fetchImage();
    fetchData();
  }, [page]);
  return (
    <div className='container'>
      {(data.length > 0 && image.length > 0) && data.map((item, index) => {
        return (
          <Card key={item.id} item={item} image={image[index]} />
        )
      })}
    </div>
  )
}

Body.propTypes = {
  page: PropTypes.number.isRequired
}

export default Body