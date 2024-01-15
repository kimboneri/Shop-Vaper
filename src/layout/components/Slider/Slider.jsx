import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './Slider.scss'

const Slider = ({ slides }) => {
  return (
    <>
      <Swiper
        
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide className="swiper-card" key={slide.id}>
            
            <img className="swiper-card__img" src={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
