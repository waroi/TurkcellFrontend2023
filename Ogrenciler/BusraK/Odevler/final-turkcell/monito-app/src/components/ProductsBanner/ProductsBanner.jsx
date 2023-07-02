import React from "react";
import { ContainerBanner } from "./ProductsBannerStyle";
import StButton from "../Button/Button";
import { useState, useEffect } from "react";
const ProductsBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <ContainerBanner className="container">
        <div className="row  ">
          <div className="col-12 col-md-7 img-div position-relative">
            <img
              className="img-banner"
              src="../../src/assets/group-portrait-adorable-puppies.png"
              border="0"
            />
          </div>
          <div className="col-12 col-md-5 position-relative">
            <img
              src="../../src/assets/heroBanner/RectAngle1Product.png"
              className="img-rectangle"
            />
            <div className="right-products">
              <h1 className="title-banner ">One more friend</h1>
              <h2 className="title-banner">Thousands more fun!</h2>
              <p className="text-banner">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="d-flex   mt-3 gap-5  buttons ">
                <StButton
                  className="btn "
                  text="View Intro"
                  type={isMobile ? "no-color-icon" : "no-color-icon-white"}
                  image={
                    isMobile
                      ? "../../src/assets/Icon/Play_Circle_Dark.png"
                      : "../../src/assets/Icon/Play_Circle.png"
                  }
                />
                <StButton
                  text="Explore Now"
                  type={isMobile ? "dark-blue" : "white"}
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerBanner>
    </div>
  );
};

export default ProductsBanner;
