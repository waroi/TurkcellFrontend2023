import React from 'react'
import { CardParent } from './styled'

const Card = ({item}) => {
  console.log(item);
  return (
    <CardParent>
      <div className='fs-5'>
        {item.title}
      </div>
      <div className='d-flex'>
      {item.coins.map((item,i) => (
        <div key={i}>
        <div className='m-1'>{item.coinTitleKeyWords}</div>
        <div className={"text-danger m-1"}>{item.coinPercent}%</div>
        </div>
      ))}
      </div>
      <div className='text-secondary my-2'>
        {item.source}
      </div>
      <div className='text-secondary my-3'>
        {item.shareURL}...
      </div>
    </CardParent>
  )
}

export default Card