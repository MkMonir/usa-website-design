'use client';

import Service from './Service';
import { serviceData } from './serviceData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <Swiper
          direction="horizontal"
          speed={1000}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          simulateTouch={false}
          modules={[Autoplay, Keyboard, Pagination]}
          className="mySwiper"
        >
          {/* SLIDE ITEM LIST */}
          <ul className="flex">
            {serviceData.map((service) => (
              // SLIDE ITEM
              <li key={service.id}>
                <SwiperSlide className="my-8">
                  <Service item={service} />
                </SwiperSlide>
              </li>
            ))}
          </ul>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
