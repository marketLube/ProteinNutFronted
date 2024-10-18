import React from "react";
import styles from "./Green.module.css";
import { Parallax } from "react-scroll-parallax";
import { useIsMobile } from "../../Hooks/useIsMobile"; // Import the custom hook

export const Green = () => {
  const isMobile = useIsMobile(); // Use the custom hook

  return (
    <div className={styles.card}>
      {!isMobile ? (
        <Parallax
          speed={10}
          scale={[1, 1.2]} // Starts at 100% size and scales to 120%
          startScroll={0} // Start scaling immediately
          endScroll={1000} // End scaling at 1000px scroll
          easing={[0.25, 0.1, 0.25, 1]} // Custom easing for a more subtle effect
          className={styles.parallax}
        />
      ) : (
        <div className={styles.parallax} /> // Fallback empty div without the parallax effect
      )}
    </div>
  );
};
