'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, EffectCreative, Pagination } from 'swiper/modules';
import Hero from './Hero';

const HeroSLider = () => {
  return (
    // HEO SLIDER
    <Swiper
      direction="horizontal"
      effect={'creative'}
      creativeEffect={{
        prev: {
          translate: ['-100%', 0, 0],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      speed={1000}
      slidesPerView={1}
      spaceBetween={20}
      simulateTouch={false}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 12000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Keyboard, EffectCreative, Pagination]}
      className="mySwiper w-full h-full relative group"
    >
      <ul>
        {[1, 2]?.map((slider, i) => (
          // SLIDER ITEM
          <SwiperSlide key={i}>
            <Hero />
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  );
};

export default HeroSLider;
