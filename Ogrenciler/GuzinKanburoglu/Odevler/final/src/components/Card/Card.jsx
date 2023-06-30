import React from 'react'
import { CardContainer, ImageDiv, BottomSection, Key, Value, Price } from './style'
import { Button } from '../Navbar/navbarStyle';

const Card = ({ product }) => {

  return (
    <div className='d-flex'>
    <CardContainer>
      <ImageDiv src={product.image} alt="" />
      <BottomSection>
        <p>{product.title}</p>
        <div className='d-flex justify-content-between gap-2'>
          <Key>Rating:</Key>
          <Value>{product.rating.rate}</Value>
          <Key>Category:</Key>
          <Value>{product.category}</Value>
        </div>
        <Price>{product.price}</Price>
        <Button>More...</Button>
      </BottomSection>
    </CardContainer>
    </div>
  )
}

export default Card;