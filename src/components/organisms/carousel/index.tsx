import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../../css/swipper.css';

import { Navigation } from 'swiper/modules';

import Slider1 from './sliders/slider-1';
import Slider2 from './sliders/slider-2';
import Slider3 from './sliders/slider-3';

export default function Carousel() {
  return (
    <div className="swipper-wrapper">
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={(slide) => {
          console.log(slide);
        }}
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider3 />
        </SwiperSlide>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
