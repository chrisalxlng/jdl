/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Container, Image } from '@mantine/core';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ImageCarousel = ({ images }) => (
  <Container
    padding={0}
    sx={(theme) => ({
      '.swiper-pagination-bullet-active': {
        backgroundColor: theme.colors['dark-teal'],
      },

      '.swiper': {
        paddingBottom: '50px',
      },
    })}
  >
    <Swiper
      grabCursor
      centeredSlides
      loop
      spaceBetween={50}
      pagination={{ clickable: true, dynamicBullets: false }}
      effect="coverflow"
      slidesPerView="auto"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Autoplay, EffectCoverflow, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image} style={{ width: 'fit-content' }}>
          <Image src={image} height={200} fit="contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
);

export default ImageCarousel;
