import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swipercomponent } from "./Swipercomponent";
import { Navigation, Pagination, Mousewheel, A11y } from "swiper/modules";
import styles from "./Reels.module.css";

import "swiper/css/navigation";
import "swiper/css/pagination";

export const Reels = () => {
  return (
    <div className={styles.bg}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, A11y]}
        spaceBetween={1}
        slidesPerView={4}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        mousewheel={{ invert: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </div>
  );
};
