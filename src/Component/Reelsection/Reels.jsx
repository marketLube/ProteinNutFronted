import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swipercomponent } from "./Swipercomponent";
import { Navigation, Pagination, Mousewheel, A11y } from "swiper/modules";
import styles from "./Reels.module.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Parallax } from "react-scroll-parallax";
import InstagramPost from "../Instagram/InstagramPost";

export const Reels = () => {
  return (
    <Parallax className={styles.bg}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, A11y]}
        spaceBetween={1}
        slidesPerView={4}
        loop={false}
        pagination={{ clickable: true }}
        mousewheel={{ invert: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <InstagramPost url="https://www.instagram.com/reel/C-xOQQoI5SQ/embed" />
        </SwiperSlide>
        <SwiperSlide>
          <InstagramPost url="https://www.instagram.com/reel/C_2-HKXIiTW/embed" />
        </SwiperSlide>
      </Swiper>
    </Parallax>
  );
};
