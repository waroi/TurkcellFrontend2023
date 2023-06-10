import React from 'react'
import { CardParent } from './styled'

const Card = ({item}) => {
  console.log("card-haberleri",item);
  return (
    <CardParent>
      <a href={item.link} target='_blank' rel='noreferrer'>
      <div className='fs-5'>
        {item.title}  
      </div>
      <div className='d-flex'>
      </div>
      <div className='text-secondary my-2'>
        {new Date(item.feedDate).toLocaleDateString()}
        </div>
      <div className='text-secondary my-2'>
        Source: {item.source}
      </div>
      </a>
    </CardParent>
  )
}

export default Card