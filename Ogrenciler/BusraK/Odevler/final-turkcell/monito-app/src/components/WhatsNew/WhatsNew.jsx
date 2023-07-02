import React from "react";
import StButton from "../Button/Button";
import { H1, H2, WhatsNewWrapper } from "./WhatsNew.style";
import ProductsNew from "../ProductsNew/ProductsNew";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const WhatsNew = () => {
  const isLoggedIn = useSelector((state) => state.root.isLogin);
  const navigate = useNavigate();
  const username = useSelector((state) => state.root.user);
  const handleProducts = () => {
    if (isLoggedIn) {
      toast.success("Welcome to our products page");
      navigate(`/home/${username}/products`);
    } else {
      toast.error("Please login to continue");
      navigate("/signup");
    }
  };
  return (
    <WhatsNewWrapper className="mt-5 container">
      <ToastContainer />
      <div className="d-flex justify-content-between text-start mt-2 title">
        <div className="d-none d-md-block">
          <H2>What's New?</H2>
          <H1>Take A Look At Some Of Our Pets</H1>
        </div>
        <div className="button d-none d-md-block">
          <StButton
            onClick={() => handleProducts()}
            text="View More"
            type="no-color-icon"
            image={"../../src/assets/Icon/Chevron_Right_MD.png"}
          />
        </div>
      </div>
      <div className="products">
        <ProductsNew limit={8} />
      </div>
      <div className="button d-block d-md-none">
        <StButton
          onClick={() => handleProducts()}
          text="View More"
          type="no-color-icon"
          image={"../../src/assets/Icon/Chevron_Right_MD.png"}
        />
      </div>
    </WhatsNewWrapper>
  );
};

export default WhatsNew;
