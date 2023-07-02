import { SplideSlide } from "@splidejs/react-splide";
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'

const SingleImageSlider = ({ singleImageItem }) => {
  const navigate = useNavigate();
  return (
    <SplideSlide onClick={() => navigate(`/pokemon/${singleImageItem}`)}>
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
