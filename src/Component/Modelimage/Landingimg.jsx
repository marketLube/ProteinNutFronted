import React from "react";
import styles from "./Landingimg.module.css";
import { Parallax } from "react-scroll-parallax";

const Landingimg = () => {
  return (
    <Parallax speed={20} className={styles.imgsection}>
      <Parallax
        className={styles.parallaxImgContainer}
        speed={10}
        scale={[1.7, 1.3]}
      >
        <div className={styles.imageContainer}></div>
      </Parallax>
      <Parallax className={styles.yellowBg} scale={[1.5, 2.5]} />
    </Parallax>
  );
};

export default Landingimg;
