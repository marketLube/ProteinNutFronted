import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swipercomponent } from "./Swipercomponent";
import {
  Navigation,
  Pagination,
  Mousewheel,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import styles from "./Reels.module.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Parallax } from "react-scroll-parallax";

import InstagramPost from "../Instagram/InstagramPost";

export const Reels = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, A11y, Autoplay]}
      spaceBetween={1}
      slidesPerView={3}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1500}
      className={styles.reels}
      loop={false}
      mousewheel={false}
      pagination={{ clickable: true }}
      breakpoints={{
        // Adjust the number of slides for different screen sizes
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
          // 1 slide for small screens like phones
        },
        768: {
          slidesPerView: 3, // 3 slides for tablets and larger screens
        },
      }}
      onSwiper={(swiper) => {
        // Add event listeners for mouse enter and leave
        swiper.el.addEventListener("mouseenter", () => {
          swiper.autoplay.stop(); // Pause autoplay on hover
        });
        swiper.el.addEventListener("mouseleave", () => {
          swiper.autoplay.start(); // Resume autoplay on mouse leave
        });
      }}
    >
      <SwiperSlide>
        <InstagramPost />
      </SwiperSlide>
      <SwiperSlide>
        <InstagramPost />
      </SwiperSlide>
      <SwiperSlide>
        <InstagramPost />
      </SwiperSlide>
      <SwiperSlide>
        <InstagramPost />
      </SwiperSlide>
      <SwiperSlide>
        <InstagramPost />
      </SwiperSlide>
      <SwiperSlide>
        <InstagramPost />
      </SwiperSlide>
    </Swiper>
  );
};
