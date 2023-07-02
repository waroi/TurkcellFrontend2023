import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import customer1 from "../../../assets/customer1.png";
import customer2 from "../../../assets/customer2.png";
import customer3 from "../../../assets/customer3.png";
import customer4 from "../../../assets/customer4.png";
import customer5 from "../../../assets/customer5.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const CustomerComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={customer1} className="rounded-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={customer2} className="rounded-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={customer3} className="rounded-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={customer4} className="rounded-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={customer5} className="rounded-4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default CustomerComponent