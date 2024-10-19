import React, { useRef } from "react";
import styles from "./GridDisplay.module.css";
import { ProductContainer } from "../ProductContainer/ProductContainer";
import { Parallax } from "react-scroll-parallax";
import { motion, useInView } from "framer-motion";
import useObserver from "../../Hooks/useObserver";

export const GridDisplay = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);

  console.log(isInView, "is in view");

  return (
    <Parallax speed={-5} className={styles.display} id="grid">
      {/* <p ref={targetRef} className={styles.heading}>
        Simple{" "}
        <span className={styles.headingFirstSpan}>
          <span className={styles.delicious}>Delicious</span>
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
      <span className={styles.headingSpan}>Nutricious</span> */}

      <h2 ref={targetRef} className={styles.headingSecondary}>
        <div className={styles.headingFirst}>
          <div className={styles.simple}>Simple</div>
          <div
            className={styles.delicious}
            style={
              isInView
                ? { transform: "translateY(100)" }
                : { transform: "translateY(-100)" }
            }
          >
            Delicious
          </div>
        </div>
        <div className={styles.nutircious}>Nutricious</div>
      </h2>

      <div className={styles.detailsproduct}>
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
    </Parallax>
  );
};
