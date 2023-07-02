import React from "react";
import StButton from "../Button/Button";
import { H1, H2, OurProductsWrapper } from "./OurProducts.style";
import ProductsNew from "../ProductsNew/ProductsNew";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const OurProducts = () => {
  const isLoggedIn = useSelector((state) => state.root.isLogin);
  const navigate = useNavigate();
  const username = useSelector((state) => state.root.user);
  const handleProducts = () => {
    if (isLoggedIn) {
      navigate(`/home/${username}/products`);
    } else {
      navigate("/signup");
    }
  };
  return (
    <OurProductsWrapper className="mt-5 container">
      <div className="d-flex justify-content-around text-start mt-2 title">
        <div className="d-md-block d-none">
          <H2>Our Products</H2>
          <H1>Hard to choose right products for your pets?</H1>
        </div>
        <div className="d-md-block d-none">
          <StButton
            onClick={() => handleProducts()}
            text="View More"
            type="no-color-icon"
            image={"../../src/assets/Icon/Chevron_Right_MD.png"}
          />
        </div>
      </div>
      <div className="d-md-block d-none">
        <ProductsNew limit={8} />
      </div>
    </OurProductsWrapper>
  );
};

export default OurProducts;
