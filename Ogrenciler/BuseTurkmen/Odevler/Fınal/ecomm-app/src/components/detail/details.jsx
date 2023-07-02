import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ProductTitle, ProductPrice, ProductRate, ProductStock, ProductDesc, ProductCate, DetailSection, ButtonDetail} from "./detailstyled";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleAddToCart = (productId) => {
    // Sepete ekleme işlemini gerçekleştir
    console.log('Ürün sepete eklendi. Ürün ID:', productId);
  };

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 mt-5 mb-3">
          <Slider {...settings}>
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <img src={product.image} alt={`Product ${index}`} className="slider-image" style={{ width: '80%', height: '50%' }}/>
              </div>
            ))}
          </Slider>
        </div>
        <DetailSection className="col-md-6 mt-5">
          <ProductTitle>{product.title}</ProductTitle>
          <ProductCate>Category: {product.category}</ProductCate>
          <ProductDesc>{product.description}</ProductDesc>
          <ProductRate>Rate: {product.rating.rate}</ProductRate>
          <ProductStock>Stock: {product.rating.count}</ProductStock>
          <ProductPrice>Price: ${product.price}</ProductPrice>
          <ButtonDetail className="btn btn-success" onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </ButtonDetail>
        </DetailSection>
      </div>
    </div>
  );
};

export default ProductDetail;
