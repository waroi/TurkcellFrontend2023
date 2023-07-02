import PropTypes from "prop-types";
import { ViewMoreButton, ViewMoreButton2 } from "../Style/styled-viewmore";
import women from "../../assets/Women-Dog1.png";
import { FaAngleRight } from "react-icons/fa";
import { BannerStyle, Title, TitleH4, Buttons } from "../Style/styled-banner";
import "bootstrap/dist/css/bootstrap.css";
const Banner = ({ womenLeft }) => {
  return (
    <BannerStyle>
      <div
        className={`banner d-flex flex-column ${
          womenLeft ? "flex-lg-row" : "flex-lg-row-reverse"
        }`}
      >
        <img src={women} />
        <div className="ps-5 ">
          <Title>One More Friend</Title>
          <TitleH4>Thousands More Fun!</TitleH4>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          {!womenLeft && (
            <div>
              <Buttons>
                <ViewMoreButton2>Explore Now</ViewMoreButton2>
                <ViewMoreButton>
                  View Intro <FaAngleRight />
                </ViewMoreButton>
              </Buttons>
            </div>
          )}
        </div>
      </div>
    </BannerStyle>
  );
};

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  womenLeft: PropTypes.bool.isRequired,
};

export default Banner;
