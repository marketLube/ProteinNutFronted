import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swipercomponent } from "./Swipercomponent";
import { Navigation, Pagination, Mousewheel, A11y } from "swiper/modules";
import styles from "./Reels.module.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Parallax } from "react-scroll-parallax";

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
    <Parallax className={styles.bg}>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, A11y]}
        spaceBetween={1}
        slidesPerView={4}
        // navigation
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
        <SwiperSlide>
          <Swipercomponent />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </Parallax>
  );
};
