import PropTypes from "prop-types";
import { ViewMoreButton, ViewMoreButton2 } from "../Style/styled-viewmore";
import productBanner from "../../assets/ProductBanner.svg";
import { FaAngleRight } from "react-icons/fa";
import { BannerStyle, Title, TitleH4, Buttons } from "../Style/styled-banner";
import "bootstrap/dist/css/bootstrap.css";
const Banner = ({ productBannerLeft }) => {
  return (
    <BannerStyle className="container ps-5 pe-5">
      <div
        className={`banner d-flex flex-column ${
          productBannerLeft ? "flex-lg-row" : "flex-lg-row"
        }`}
      >
        <img src={productBanner} />
        <div className="ps-5 me-3 ">
          <Title>One More Friend</Title>
          <TitleH4>Thousands More Fun!</TitleH4>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          {
            <div>
              <Buttons>
                <ViewMoreButton2>Explore Now</ViewMoreButton2>
                <ViewMoreButton>
                  View Intro <FaAngleRight />
                </ViewMoreButton>
              </Buttons>
            </div>
          }
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
  productBannerLeft: PropTypes.bool.isRequired,
};

export default Banner;
