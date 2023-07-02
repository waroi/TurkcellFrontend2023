import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/slices/productList";
import Icon from "../../Icon/Icon";
import { Container } from "../../assets/css/style";
import {
  DetailTableDiv,
  DetailİmageDiv,
  DetailTextDiv,
  Slider,
  Sliderİmg,
  ThumbnailSlider,
  ThumbnailSliderİmg,
  SliderButtonPre,
  SliderButtonNex,
} from "./styleDetailTable";
import PropTypes from "prop-types";

function DetailTable({ id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct());
    setProduct(products.filter((item) => item.id == id));
  }, [dispatch]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = [
    product[0].image,
    Icon.Slider3,
    Icon.Slider4,
    Icon.Slider5,
    Icon.Slider6,
    Icon.Slider7,
    Icon.Slider8,
  ];

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handlePrevImage = () => {
    setActiveImage((prevImage) => {
      const newIndex = prevImage === 0 ? images.length - 1 : prevImage - 1;
      return newIndex;
    });
  };

  const handleNextImage = () => {
    setActiveImage((prevImage) => {
      const newIndex = prevImage === images.length - 1 ? 0 : prevImage + 1;
      return newIndex;
    });
  };

  return (
    <Container>
      <DetailTableDiv>
        <DetailİmageDiv>
          <Slider>
            <Sliderİmg src={images[activeImage]} alt="Active Image" />
            <SliderButtonPre onClick={handlePrevImage}>
              <img src={Icon.PreIcon} alt="icon" />
            </SliderButtonPre>
            <SliderButtonNex onClick={handleNextImage}>
              <img src={Icon.NextIcon} alt="icon" />
            </SliderButtonNex>
          </Slider>
          <ThumbnailSlider>
            {images.map((image, index) => (
              <ThumbnailSliderİmg
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </ThumbnailSlider>
        </DetailİmageDiv>
        <DetailTextDiv></DetailTextDiv>
      </DetailTableDiv>
    </Container>
  );
}

DetailTable.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailTable;
