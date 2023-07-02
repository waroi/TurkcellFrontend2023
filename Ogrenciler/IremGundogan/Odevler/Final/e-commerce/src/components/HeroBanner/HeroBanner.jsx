/* eslint-disable react/prop-types */
import HeroBannerStyled from "./HeroBannerStyle";
import ButtonStyle from "../../components/Button/ButtonStyle";
import ButtonSecondaryStyle from "../../components/ButtonSecondry/ButtonSecondaryStyle";
import goodWoman from "../../../assets/good-humored-woman-holds-dog.svg";
import Rectangles from "./Rectangles/Rectangles";
import Container from "../Container/Container";
import playIcon from "../../../assets/Play_Circle.png";

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <Container>
        <HeroContent />
        <HeroImage imageSrc={goodWoman} />
        <Rectangles />
      </Container>
    </HeroBannerStyled>
  );
};

const HeroContent = () => (
  <div className="hero-content mt-5">
    <h1 className="title">One More Friend</h1>
    <h2 className="subtitle py-3">Thousands More Fun!</h2>
    <p className="paragraph ">
      Having a pet means you have more joy, a new friend, a happy person who
      will always be with you to have fun. We have 200+ different pets that can
      meet your needs!
    </p>
    <div className="button-container gap-3 d-flex">
      <ButtonSecondaryStyle className="d-flex gap-2 buttonText">
        View Intro
        <img className="playIcon" src={playIcon} />
      </ButtonSecondaryStyle>
      <ButtonStyle>Explore Now</ButtonStyle>
    </div>
  </div>
);

const HeroImage = ({ imageSrc }) => (
  <div className="hero-image ">
    <img src={imageSrc} />
  </div>
);

export default HeroBanner;
