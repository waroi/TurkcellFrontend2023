import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.css"
const BlogDetail = ({newsArr}) => {

 let {id} = useParams()
  return (
    <div className='blogWrap container col-12 p-0 m-0'>
      <div className='leftSide col-6 p-2'>
        <img className='w-100 rounded' src={newsArr[id].image} alt="" />
      </div>
      <div className='rightSide col-6 p-2'>
<h2>{newsArr[id].name}</h2>
<p>{newsArr[id].description}</p>
<p>{newsArr[id].source}</p>
<div className='author'>
  <img className='authorImg' src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
  <h5>Mr. and Mrs. EGSS</h5>
</div>
      </div>
      </div>
  )
}

export default BlogDetail