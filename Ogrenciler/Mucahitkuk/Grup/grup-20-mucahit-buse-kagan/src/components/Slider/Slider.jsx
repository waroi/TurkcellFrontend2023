/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderImg } from "./styled";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css"


import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Slider = ({news,page,category}) => {

  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        height={300}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      > 
          {news && news?.map((item)=><SwiperSlide key={item.key}>
            <Link to={`/newsDetail/${item.key}?page=${page}&category=${category?category:"general"}`}>
              <SliderImg src={item?.image} alt="Hatalı URL" />
              <h3>{item?.name}</h3>
              </Link>
          </SwiperSlide>)}
      </Swiper>
  );
}

export default Slider