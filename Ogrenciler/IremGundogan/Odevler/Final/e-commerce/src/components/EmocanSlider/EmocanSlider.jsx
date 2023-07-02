
import Slider from "react-slick";
import { Emocan } from "./Emocandata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmocanSliderStyle from "./EmocanSliderStyle";

const EmocanSlider = function () {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <EmocanSliderStyle>
      <h3>Our Lovely Emocans</h3>
      <div className="slider">
        <Slider {...settings}>
          {Emocan.map((item) => (
            <div key={item.id} className="card">
              <div className="card-top">
                <img src={item.imgUrl} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </EmocanSliderStyle>
  );
}

export default EmocanSlider;
