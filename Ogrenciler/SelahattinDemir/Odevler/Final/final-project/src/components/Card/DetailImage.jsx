import Proptypes from "prop-types";
import { useState } from "react";
import {
  DetailImageContainer,
  SliderContainer,
  SliderImage,
  SliderArrow,
  ProductInfoContainer,
  ProductInfo,
  SocialInfoContainer,
} from "./CardStyle.js";

function DetailImage({ data }) {
  const images = [
    "src/assets/img 3.png",
    "src/assets/img 4.png",
    "src/assets/img 5.png",
    "src/assets/img 6.png",
    "src/assets/img 7.png",
    data.image,
  ];

  const initialActiveImageIndex = images.indexOf(data.image);
  const [activeImageIndex, setActiveImageIndex] = useState(
    initialActiveImageIndex
  );

  const handleImageChange = (index) => {
    setActiveImageIndex(index);
  };
  return (
    <>
      <DetailImageContainer>
        <img className="w-100" src={images[activeImageIndex]} alt="Product" />
      </DetailImageContainer>
      <SliderContainer className="d-flex gap-2 ms-0 ms-lg-4">
        {images.map((image, index) => (
          <SliderImage
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={
              (index === activeImageIndex ? "block" : "none",
              index === activeImageIndex ? "active" : "")
            }
            onClick={handleImageChange.bind(null, index)}
          />
        ))}
        <SliderArrow
          onClick={() => {
            setActiveImageIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
          }}
          className="prev"
        >
          &#10094;
        </SliderArrow>
        <SliderArrow
          onClick={() =>
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="next"
        >
          &#10095;
        </SliderArrow>
      </SliderContainer>
      <ProductInfoContainer className="justify-content-between my-3 ms-0 ms-lg-4 d-none d-lg-flex">
        <div className="d-flex gap-2 align-items-center">
          <i className="bi bi-gender-ambiguous"></i>
          <ProductInfo className="mb-0">
            100% health guarantee for pet
          </ProductInfo>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <i className="bi bi-person-hearts "></i>
          <ProductInfo className="mb-0">
            100% guarantee of pet identification
          </ProductInfo>
        </div>
      </ProductInfoContainer>
      <SocialInfoContainer className="gap-3 ms-sm-0 ms-lg-4 d-none d-lg-flex">
        <div className="d-flex gap-2 align-items-center">
          <i className="bi bi-share-fill"></i>
          <ProductInfo className="mb-0">Share:</ProductInfo>
        </div>
        <div className="d-flex gap-2">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </SocialInfoContainer>
    </>
  );
}

DetailImage.propTypes = {
  data: Proptypes.object.isRequired,
};

export default DetailImage;
