import { SplideSlide } from "@splidejs/react-splide";
import PropTypes from 'prop-types'

const SingleImageSlider = ({ singleImageItem }) => {
  return (
    <SplideSlide>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${singleImageItem}.png`}
        alt={`Image ${singleImageItem}`}
        className="slider-image"
      />
    </SplideSlide>
  );
};

SingleImageSlider.propTypes = {
  singleImageItem: PropTypes.number
}

export default SingleImageSlider;
