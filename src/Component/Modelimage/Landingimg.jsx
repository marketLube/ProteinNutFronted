import React, { useRef } from "react";
import styles from "./Landingimg.module.css";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";
import { useSelector } from "react-redux";

const Landingimg = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);

  const { isMobile, isDesktop, isTab } = useSelector((state) => state.endpoint);

  console.log(isDesktop, isMobile);

  return (
    <Parallax speed={0} className={styles.imgsection}>
      <Parallax
        ref={targetRef}
        className={styles.parallaxImgContainer}
        speed={isDesktop ? 20 : 10}
        scale={[0.8, 1]}
        easing={[0.25, 0.1, 0.25, 1]}
      >
        <Parallax
          speed={isDesktop ? 20 : 10}
          scale={isDesktop ? [1.3, 1.5] : [1.2, 1.7]}
          className={styles.imageContainer}
        >
          <img src="./Image/WebBanner.svg" alt="" className={styles.modalimg} />
        </Parallax>
      </Parallax>

      <Parallax
        speed={isDesktop ? 20 : 10}
        className={styles.yellowBg}
        scale={isDesktop ? [1.5, 5] : [1.3, 3]}
      />
    </Parallax>
  );
};

export default Landingimg;
