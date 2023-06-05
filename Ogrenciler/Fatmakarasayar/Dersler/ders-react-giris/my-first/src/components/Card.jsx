import React, { Fragment, useEffect, useState } from 'react'
import './card.css'
import Card2 from 'react-bootstrap/card';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Card = () => {
  const [src, setsrc] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        data.map((img) => {
          src.push(img.download_url, img.id)
          console.log(src)
        })
      })
  }, [])

  return (
    <div>
      <Card2 style={{ width: '18rem' }}>

        {src.map((item, i) => {


          return (


            <Card2.Img variant="top" src={item} key={i} />

          )
        })}

        <Card2.Body>
          <Card2.Title>Card2 Title</Card2.Title>
          <Card2.Text>
            Some quick example text to build on the card2 title and make up the
            bulk of the card2's content.
          </Card2.Text>

        </Card2.Body>
      </Card2>


    </div>

  )
}
export default Card
// <img key={id} src={item}  />

