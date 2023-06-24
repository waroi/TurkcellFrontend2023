import React from "react";
import {
  ProductMainBox,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductCategory,
  ProductPrice,
  ProductCount,
  ProductRate,
} from "../../styles/ProductBox";

const ProductBox = ({ product }) => {
  let { title, image, category, price, count, rate } = product;
  if (title.length > 25) {
    title = title.substring(0, 25) + "...";
  } else {
    title = title.substring(0, 25);
  }
  let fullStarNumber = Math.floor(rate);
  let halfStarNumber = Math.ceil(rate - fullStarNumber);
  let emptyStarNumber = 5 - fullStarNumber - halfStarNumber;

  return (
    <ProductMainBox>
      <ProductImage src={image} />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductCategory>{category}</ProductCategory>
        <ProductPrice>${price}</ProductPrice>
        <div className="w-100">
          <ProductCount>Stock:{count}</ProductCount>
          <ProductRate>
            {[...Array(fullStarNumber)].map((item, index) => {
              return <i className="fas fa-star" key={index}></i>;
            })}
            {[...Array(halfStarNumber)].map((item, index) => {
              return <i className="fas fa-star-half-alt" key={index}></i>;
            })}
            {[...Array(emptyStarNumber)].map((item, index) => {
              return <i className="far fa-star" key={index}></i>;
            })}
          </ProductRate>
        </div>
      </ProductInfo>
    </ProductMainBox>
  );
};

export default ProductBox;
