import React, { useEffect, useState } from 'react'
import { CardContainer, ImageDiv, BottomSection, Key, Value, Price } from './style'
import { Button } from '../Navbar/navbarStyle';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/slices/Basket';

const Card = ({ product }) => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then((data) => setUsers(data))
  }, []);

  async function getUsers() {
    const response = await fetch(`http://localhost:3000/users`);
    const users = await response.json();
    return users;
  }
  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };
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
          <Button onClick={() => handleAddToBasket(product)}>Add to Basket</Button>
        </BottomSection>
      </CardContainer>
    </div>
  )
}

export default Card;