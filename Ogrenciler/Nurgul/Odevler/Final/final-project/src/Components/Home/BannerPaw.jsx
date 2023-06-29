import PropTypes from "prop-types";
import { ViewMoreButton, ViewMoreButton2 } from "../Style/styled-viewmore";
import paw from "../../assets/PawBanner.png";
import { FaAngleRight } from "react-icons/fa";
import { BannerStyle, Title, TitleH4, Buttons } from "../Style/styled-banner";
import "bootstrap/dist/css/bootstrap.css";
const Banner = ({ pawLeft }) => {
  return (
    <BannerStyle className="container">
      <div
        className={`banner d-flex flex-column ${
          pawLeft ? "flex-lg-row" : "flex-lg-row-reverse"
        }`}
      >
        <img src={paw} />
        <div>
          <Title>Adoption</Title>
          <TitleH4>We Need Help. So do Hey</TitleH4>
          <p>
            Adopt a pet and give it a home, <br />
            it will be love you back unconditionally.
          </p>
          {!pawLeft && (
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
  pawLeft: PropTypes.bool.isRequired,
};

export default Banner;
