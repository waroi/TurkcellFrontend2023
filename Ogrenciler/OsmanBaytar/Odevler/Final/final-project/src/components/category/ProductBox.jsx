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
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

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

  const currentUser = useSelector((state) => state.login.login);
  function warningToast() {
    toast.warning("Log in required", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const navigate = useNavigate();
  function goToDetail() {
    if (currentUser != "") {
      navigate(`/Products/${product.id}`);
    } else if (currentUser.length == 0) {
      warningToast();
    }
  }

  return (
    <ProductMainBox>
      <ProductImage onClick={goToDetail} src={image} />
      <ProductInfo>
        <ProductTitle onChangeCapture={goToDetail}>{title}</ProductTitle>
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
      <ToastContainer />
    </ProductMainBox>
  );
};

export default ProductBox;
