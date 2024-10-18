import React, { useRef } from "react";
import styles from "./GridDisplay.module.css";
import { ProductContainer } from "../ProductContainer/ProductContainer";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";

export const GridDisplay = () => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);

  return (
    <Parallax speed={-5} className={styles.display} id="grid">
      <p ref={targetRef} className={styles.heading}>
        Simple{" "}
        <span className={styles.headingFirstSpan}>
          Delicious
          <span
            className={styles.headingFirstSpanBg}
            style={
              isInView
                ? {
                    animation: "headingFirstSpanBg 1s linear forwards .5s",
                  }
                : {}
            }
          ></span>
        </span>
      </p>
      <span
        className={styles.headingSpan}
        style={
          isInView
            ? { animation: "headingSpan 1s linear forwards 1s" }
            : { animation: "none" }
        }
      >
        Nutricious
      </span>

      <div className={styles.detailsproduct}>
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
    </Parallax>
  );
};
