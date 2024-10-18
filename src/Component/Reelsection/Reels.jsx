import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swipercomponent } from "./Swipercomponent";
import {
  Navigation,
  Pagination,
  FreeMode,
  Mousewheel,
  A11y,
} from "swiper/modules";
import styles from "./Reels.module.css";

import "swiper/css/navigation";
import "swiper/css/pagination";

export const Reels = () => {
  return (
    <div className={styles.bg}>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>

        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </div>
  );
};
