import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import CardItem from './CardItem';
import SwiperCore, { Navigation } from 'swiper/core';


SwiperCore.use([Navigation]);

// dummy data
const items = [
  {
    id: 1,
    img: 'img1.jpg',
    title: 'Product 1',
    price: 29.99,
    text: 'Product 1 description',
    rating: 4,
    img2: 'img1-2.jpg',
  },
  {
    id: 2,
    img: 'img1.jpg',
    title: 'Product 1',
    price: 29.99,
    text: 'Product 1 description',
    rating: 4,
    img2: 'img1-2.jpg',
  },
  {
    id: 3,
    img: 'img1.jpg',
    title: 'Product 1',
    price: 29.99,
    text: 'Product 1 description',
    rating: 4,
    img2: 'img1-2.jpg',
  },
  {
    id: 4,
    img: 'img1.jpg',
    title: 'Product 1',
    price: 29.99,
    text: 'Product 1 description',
    rating: 4,
    img2: 'img1-2.jpg',
  },
];

function CardCarousel() {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true} // enable navigation buttons
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CardItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  
export default CardCarousel;
