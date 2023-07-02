import React from "react";
import {
  HeroBannerContainer,
  HeroBannerLeft,
  HeroBannerRight,
  Paragraph,
  H1,
  H2,
  Rectangle9,
  Rectangle1,
  Rectangle2,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  GoodHumored,
} from "./HeroBanner.style";
import StButton from "../Button/Button";
const HeroBanner = () => {
  return (
    <HeroBannerContainer>
      <Rectangle9 src="../../src/assets/heroBanner/Rectangle9.png" />
      <HeroBannerLeft>
        <H1>One More Friend</H1>
        <H2>Thousands More Fun!</H2>
        <Paragraph>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </Paragraph>
        <div className="d-flex gap-1 pt-4  ">
          <StButton
            text="View Intro"
            type="no-color-icon"
            image={"../../src/assets/Icon/Play_Circle_dark.png"}
          />
          <StButton text="Explore Now" type="dark-blue" />
        </div>
      </HeroBannerLeft>
      <HeroBannerRight>
        <GoodHumored src="../../src/assets/heroBanner/good-humored.png" />
        <Rectangle5 src="../../src/assets/heroBanner/Rectangle5.png" />
        <Rectangle7 src="../../src/assets/heroBanner/Rectangle7.png" />
        <Rectangle6 src="../../src/assets/heroBanner/Rectangle6.png" />
        <Rectangle1 src="../../src/assets/heroBanner/Rectangle1.png" />
        <Rectangle2 src="../../src/assets/heroBanner/Rectangle2.png" />
      </HeroBannerRight>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
