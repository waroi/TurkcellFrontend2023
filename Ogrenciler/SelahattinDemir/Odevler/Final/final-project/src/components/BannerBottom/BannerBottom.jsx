import {
  BannerBottomContainer,
  BannerText,
  Rectangle1,
  Rectangle2,
} from "./BannerBottomStyle";
import {
  BannerTitle,
  BannerSecondTitle,
  ButtonView,
  ButtonExplore,
  BannerImage,
} from "../HerroBanner/HerroBannerStyle";

function BannerBottom() {
  return (
    <BannerBottomContainer className="d-none d-lg-block">
      <Rectangle1> </Rectangle1>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
          <BannerTitle className="ms-5">Adoption </BannerTitle>
          <BannerSecondTitle className="text-center">
            We need help. so do they.
          </BannerSecondTitle>
          <BannerText>Adopt a pet and give it a home,</BannerText>
          <BannerText>it will be love you back unconditionally.</BannerText>
          <div className="d-flex gap-3 align-items-center mt-4 ms-5">
            <ButtonExplore>Explore Now</ButtonExplore>
            <ButtonView>
              View Intro
              <i className="bi bi-play-circle"></i>
            </ButtonView>
          </div>
        </div>
        <div className="col-lg-6">
          <BannerImage
            src="src/assets/bannerbottom.png"
            alt="hero"
            className="img-fluid"
          />
          <Rectangle2> </Rectangle2>
        </div>
      </div>
    </BannerBottomContainer>
  );
}

export default BannerBottom;
