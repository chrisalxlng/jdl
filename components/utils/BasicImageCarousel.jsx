/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import Image from './Image';

const BasicImageCarousel = ({ images, height }) => (
  <Swiper
    centeredSlides
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop
    slidesPerView="auto"
    modules={[Autoplay]}
  >
    {images.map((img) => (
      <SwiperSlide key={img}>
        <Image src={img} placeholder="blur" height={height} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default BasicImageCarousel;
