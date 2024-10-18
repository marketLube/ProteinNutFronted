import React, { useRef } from "react";
import styles from "./GridDisplay.module.css";
import { ProductContainer } from "../ProductContainer/ProductContainer";
import { Parallax } from "react-scroll-parallax";
import { motion, useInView } from "framer-motion";

export const GridDisplay = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);

  return (
    <Parallax speed={-5} className={styles.display} id="grid">
      <p ref={targetRef} className={styles.heading}>
        Simple{" "}
        <span className={styles.headingFirstSpan}>
          <motion.span
            animate={{ x: 100 }} // Move 100 pixels to the right
            transition={{ duration: 1 }} // Duration of 1 second
          >
            Delicious
          </motion.span>
          <motion.span
            className={styles.headingFirstSpanBg}
            style={
              isInView
                ? {
                    animation: "headingFirstSpanBg 1s linear forwards .5s",
                  }
                : {}
            }
          ></motion.span>
        </span>
      </p>
      <motion.span
        className={styles.headingSpan}
        initial={{ opacity: 0, scaleX: 0, x: -50 }} // Initial state
        animate={isInView ? { opacity: 1, scaleX: 1, x: 0 } : {}} // Animate on view
        transition={{ duration: 5, ease: "easeOut" }} // Transition settings
      >
        Nutricious
      </motion.span>

      <div className={styles.detailsproduct}>
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
    </Parallax>
  );
};
