import {
  HerroBannerContainer,
  BannerTitle,
  BannerText,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  BannerSecondTitle,
  ButtonView,
  ButtonExplore,
  BannerImage,
} from "./HerroBannerStyle";

function HerroBanner() {
  return (
    <HerroBannerContainer>
      <div className="container">
        <Rectangle1> </Rectangle1>
        <Rectangle7> </Rectangle7>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <BannerTitle>One more friend</BannerTitle>
            <BannerSecondTitle>Thousands more fun!</BannerSecondTitle>
            <BannerText>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </BannerText>
            <div className="d-flex gap-4   align-items-center mb-5 mb-lg-0">
              <ButtonView>
                View Intro
                <i className="bi bi-play-circle"></i>
              </ButtonView>
              <ButtonExplore>Explore Now</ButtonExplore>
            </div>
          </div>
          <div className="col-lg-6">
            <Rectangle6> </Rectangle6>
            <Rectangle5> </Rectangle5>
            <Rectangle4> </Rectangle4>
            <Rectangle3> </Rectangle3>
            <Rectangle2> </Rectangle2>
            <BannerImage
              src="src/assets/herrobanner.png"
              alt="hero"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </HerroBannerContainer>
  );
}

export default HerroBanner;
