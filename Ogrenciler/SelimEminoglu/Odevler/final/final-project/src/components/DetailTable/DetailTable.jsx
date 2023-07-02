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
  DetailGiftDiv,
  DetailRedIcon,
  DetailYellowIcon,
  DetailGiftText,
  DetailSocialDiv,
  DetailShareIcon,
  DetailShareText,
  DetailSocialIcon,
  FlexDiv,
  DetailPathDiv,
  DetailPathIcon,
  DetailTitleDiv,
  DetailTitle,
  DetailTitleİd,
  DetailPrice,
  DetailButtonDiv,
  DetailİnfoDiv,
  DetailİnfoLeft,
  DetailİnfoRight,
} from "./styleDetailTable";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function DetailTable({ id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const [product, setProduct] = useState({});
  const [mainImage, setMainImage] = useState("");
  const [mainİd, setMainİd] = useState(0);
  const [mainTitle, setMainTitle] = useState("");
  const [mainPrice, setMainPrice] = useState(0);
  const [mainCategory, setMainCategory] = useState("");
  const [mainDescription, setMainDescription] = useState("");
  const [mainRate, setMainRate] = useState(0);

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setProduct(products.filter((item) => item.id == id));
      setMainImage(products[0].image);
      setMainİd(products[0].id);
      setMainTitle(products[0].title);
      setMainPrice(products[0].price);
      setMainDescription(products[0].description);
      setMainCategory(products[0].category);
      setMainRate(products[0].rating.rate);
    }
  }, [products, id]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = [
    mainImage,
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
          <DetailGiftDiv>
            <DetailRedIcon src={Icon.RedIcon} alt="icon" />
            <DetailGiftText>100% health guarantee for pets</DetailGiftText>
            <DetailYellowIcon src={Icon.YellowIcon} alt="icon" />
            <DetailGiftText>
              100% guarantee of pet identification
            </DetailGiftText>
          </DetailGiftDiv>
          <DetailSocialDiv>
            <FlexDiv>
              <DetailShareIcon src={Icon.ShareIcon} alt="icon" />
              <DetailShareText>Share:</DetailShareText>
            </FlexDiv>
            <DetailSocialIcon src={Icon.FacebookSocialIcon} alt="icon" />
            <DetailSocialIcon src={Icon.TwitterSocialIcon} alt="icon" />
            <DetailSocialIcon src={Icon.InstagramSocialIcon} alt="icon" />
            <DetailSocialIcon src={Icon.YoutubeSocialIcon} alt="icon" />
          </DetailSocialDiv>
        </DetailİmageDiv>
        <DetailTextDiv>
          <FlexDiv>
            <DetailPathDiv>Home</DetailPathDiv>
            <DetailPathIcon src={Icon.PathIcon} alt="icon" />
            <DetailPathDiv>Dog</DetailPathDiv>
            <DetailPathIcon src={Icon.PathIcon} alt="icon" />
            <DetailPathDiv>Large Dog</DetailPathDiv>
            <DetailPathIcon src={Icon.PathIcon} alt="icon" />
            <DetailPathDiv>Shiba Inu Sepia</DetailPathDiv>
          </FlexDiv>
          <DetailTitleDiv>
            {console.log(product)}
            <DetailTitleİd>{mainİd}</DetailTitleİd>
            <DetailTitle>{mainTitle}</DetailTitle>
            <DetailPrice>{mainPrice} $</DetailPrice>
          </DetailTitleDiv>
          <DetailButtonDiv>
            <Button title="Sepete Ekle" />
          </DetailButtonDiv>
          <div>
            <DetailİnfoDiv>
              <DetailİnfoLeft>Kategori:</DetailİnfoLeft>
              <DetailİnfoRight>{mainCategory}</DetailİnfoRight>
            </DetailİnfoDiv>
            <DetailİnfoDiv>
              <DetailİnfoLeft>Tanım:</DetailİnfoLeft>
              <DetailİnfoRight>{mainDescription}</DetailİnfoRight>
            </DetailİnfoDiv>
            <DetailİnfoDiv>
              <DetailİnfoLeft>Derece:</DetailİnfoLeft>
              <DetailİnfoRight>{mainRate}</DetailİnfoRight>
            </DetailİnfoDiv>
          </div>
        </DetailTextDiv>
      </DetailTableDiv>
    </Container>
  );
}

DetailTable.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailTable;
