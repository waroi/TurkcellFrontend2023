import {
  CategoryBannerContainer,
  Rectangle1,
  Rectangle2,
  BannerTitle,
  BannerSecondTitle,
  BannerText,
  ButtonView,
  ButtonExplore,
} from "./CategoryBannerStyle";
import { BannerImage } from "../HerroBanner/HerroBannerStyle";

function CategoryBanner() {
  return (
    <CategoryBannerContainer>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 order-1 order-lg-0">
          <Rectangle1> </Rectangle1>
          <Rectangle2 className="d-block d-lg-none"> </Rectangle2>
          <BannerImage
            src="src/assets/categorybanner.png"
            alt="hero"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 order-0 order-lg-1">
          <BannerTitle>One more friend</BannerTitle>
          <BannerSecondTitle>Thousands more fun!</BannerSecondTitle>
          <BannerText>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </BannerText>
          <div className="d-flex justify-content-evenly align-items-center">
            <ButtonView>
              View Intro
              <i className="bi bi-play-circle"></i>
            </ButtonView>
            <ButtonExplore>Explore Now</ButtonExplore>
          </div>
        </div>
      </div>
    </CategoryBannerContainer>
  );
}

export default CategoryBanner;
