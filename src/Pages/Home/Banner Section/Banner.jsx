import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <style>
        {
        `
          .mySwiper {
            width: 100%;
            height: 300px;
          }
          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            background: #f0f0f0;
          } 
        `     
        }
      </style>

      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        initialSlide={2}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
