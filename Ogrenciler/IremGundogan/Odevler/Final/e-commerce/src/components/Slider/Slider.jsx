import PropTypes from "prop-types";
import SliderStyle from "./SliderStyle";
import FikriyeEmocan from "../../../assets/fikriye-emocan.png";

const Slider = ({ img }) => {
  return (
    <div>
      <SliderStyle id="productCarouselIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#productCarouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#productCarouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#productCarouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="product" />
          </div>
          <div className="carousel-item">
            <img src={FikriyeEmocan} className="fikriye" alt="slider2" />
          </div>
          <div className="carousel-item">
            <img
              src={FikriyeEmocan}
              className="fikriye tersFikriye"
              alt="slider3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarouselIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarouselIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </SliderStyle>
    </div>
  );
};

Slider.propTypes = {
  img: PropTypes.string,
};

export default Slider;
