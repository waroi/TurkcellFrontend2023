import { useRef } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { SliderContainer } from "./SliderStyle";
import SingleImageSlider from "./SingleImageSlider";

const Slider = () => {
  const splideRef = useRef(null);
  const imageArray = Array.from({ length: 10 }, () =>
   1 + Math.floor(Math.random() * 100)
  );

  return (
    <SliderContainer>
      <Splide
        options={{
          perPage: 5,
          perMove: 1,
          rewind: true,
          pagination: false,
          arrows: true,
          autoplay: true,
        interval: 1500,
        }}
        ref={splideRef}
        className="splide"
      >
        {imageArray.map((item, index) => (
          <SingleImageSlider key={index} singleImageItem={item} />
        ))}
      </Splide>
    </SliderContainer>
  );
};

export default Slider;
