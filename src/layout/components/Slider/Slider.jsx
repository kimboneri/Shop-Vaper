import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";
const Slider = ({ slides, perView, arrows, autoplay }) => {
  return (
    <div className="swiper-container">
      <Swiper
        autoplay={autoplay}
        navigation={arrows}
        modules={[Navigation, Autoplay]}
        className="swiper-slider"
        spaceBetween={50}
        slidesPerView={perView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1000:{
            slidesPerView: 4,
          },
          801:{
            slidesPerView: 3,
          },
          651:{
            slidesPerView: 2,
          },
          300:{
            slidesPerView:1,
          }


        }
       

        } 

      >
        {slides.map((slide) => (
          <SwiperSlide className="swiper-slide" key={slide.id}>
            <img src={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
