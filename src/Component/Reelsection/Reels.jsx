import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { Swipercomponent } from './Swipercomponent';
import styles from './Reels.module.css';

import 'swiper/css';

export const Reels = () => {
  const swiperRef = useRef(null);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!swiperRef.current) return;
      
      const swiper = swiperRef.current.swiper;
      
      if (isScrollLocked) {
        e.preventDefault();
        
        if (e.deltaY < 0) {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
        
        // Check if we've reached the end of the Swiper
        if (swiper.isEnd && e.deltaY > 0) {
          setIsScrollLocked(false);
        }
      } else if (swiper.isBeginning && e.deltaY < 0) {
        // If scrolling up at the top, re-enable Swiper lock
        setIsScrollLocked(true);
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isScrollLocked]);

  return (
    <div className={`${styles.bg} ${isScrollLocked ? styles.locked : ''}`}>
      <Swiper
        ref={swiperRef}
        loop={true}
        modules={[A11y]}
        spaceBetween={1}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><Swipercomponent /></SwiperSlide>
        <SwiperSlide><Swipercomponent /></SwiperSlide>
        <SwiperSlide><Swipercomponent /></SwiperSlide>
        <SwiperSlide><Swipercomponent /></SwiperSlide>
        <SwiperSlide><Swipercomponent /></SwiperSlide>
        <SwiperSlide><Swipercomponent /></SwiperSlide>
      </Swiper>
    </div>
  );
};