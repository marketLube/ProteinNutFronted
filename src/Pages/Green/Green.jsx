import React from "react";
import styles from "./Green.module.css";
import { Parallax } from "react-scroll-parallax";

export const Green = () => {
  return (
    <div className={styles.card}>
      <Parallax
        speed={10}
        scale={[1, 1.2]} // S.2tarts at 100% size and scales to 120%
        easing={[0.25, 0.1, 0.25, 1]} // Custom easing for a more subtle effect
        className={styles.parallax}
      />
    </div>
  );
};
