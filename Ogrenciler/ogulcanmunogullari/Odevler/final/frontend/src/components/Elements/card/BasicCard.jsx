import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Frame = styled.div`
 width: 100%;
 overflow: hidden;
 border-radius: 12px;
 background:  #FDFDFD;
 box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 &:hover{
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.2);
 }
 a{
  width: 100%;
  height: 100%;
  padding: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
 }
 h2{
  margin-top: 1em;
  color:  #00171F;
  font-size: 14px !important;
  font-weight: 700;
  line-height: 20px;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (min-width: 768px) {
   line-clamp: 1;
   -webkit-line-clamp: 1;
   font-size: 16px !important;
   line-height: 24px;
  }
 }
 h3{
  color:  #00171F;
  font-size: 16px !important;
  font-weight: 700;
  line-height: 24px;
  @media screen and (min-width: 768px) {
   font-size: 14px !important;
   line-height: 20px;
  }
 }
 p{
  color: #667479;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
 }
 .productDesc{
  margin-top: auto;
 }
 `

export const ImageDiv = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 170px;
 overflow: hidden;
 @media screen and (min-width: 768px) {
  height: 260px;
 }
 img{
  width: 100%;
 }
`

const BasicCard = ({ product }) => {
 const { id, title, price, category, image, rating } = product
 const { rate } = rating
 return (
  <Frame>
   <Link to={`/product/${id}`}>
    <ImageDiv>
     <img src={image} alt="product image" />
    </ImageDiv>
    <h2>
     {title}
    </h2>
    <div className='productDesc'>
     <p>
      Category: <b>{category}</b>
     </p>
     <p>
      <b>{rate}</b> Star
     </p>
    </div>
    <h3>
     {price} Dollar
    </h3>
   </Link>
  </Frame>
 )
}

BasicCard.propTypes = {
 product: PropTypes.object.isRequired
}

export default BasicCard