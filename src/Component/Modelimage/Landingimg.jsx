import React, { useRef } from "react";
import styles from "./Landingimg.module.css";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";

const Landingimg = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);

  return (
    <Parallax speed={20} className={styles.imgsection}>
      <Parallax
        ref={targetRef}
        className={styles.parallaxImgContainer}
        speed={10}
        scale={[1, 2.5]}
      >
        <Parallax scale={[1, 1.5]} className={styles.imageContainer}>
          <img
            src="./Image/BGbYellowfnl.jpg"
            alt=""
            className={styles.modalimg}
          />
        </Parallax>
      </Parallax>
      <Parallax speed={20} className={styles.yellowBg} scale={[1.5, 5]} />
    </Parallax>
  );
};

export default Landingimg;
