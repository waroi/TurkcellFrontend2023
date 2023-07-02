import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard/ProductCard";
import { Pagination } from "swiper";

const SwiperCard = ({ cards, setWindow = false }) => {
  const [width, setWidth] = useState();
  const [slidesPer, setslidesPer] = useState(1);

  useEffect(() => {
    if (setWindow) {
      window.onresize = function () {
        setWidth(window.innerWidth);
      };

      screen.width < 1120 && screen.width > 880
        ? setslidesPer(3)
        : screen.width < 880 && screen.width > 600
        ? setslidesPer(2)
        : screen.width < 660
        ? setslidesPer(2)
        : setslidesPer(4);
    }
  }, [setWindow, width]);

  return (
    <div className="w-100">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={true}
        spaceBetween={30}
        slidesPerView={slidesPer}
        autoplay={true}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={card} isSwiper={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
