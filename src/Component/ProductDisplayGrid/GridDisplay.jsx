import React, { useRef } from "react";
import styles from "./GridDisplay.module.css";
import { ProductContainer } from "../ProductContainer/ProductContainer";
import { useIsMobile } from "../../Hooks/useIsMobile"; // Import your custom hook
import { Parallax } from "react-scroll-parallax";

export const GridDisplay = () => {
  const targetRef = useRef(null);
  const isInView = true; // Set a default value for isMobile fallback
  const isMobile = useIsMobile(); // Using the custom hook
   

  return (
    <>
      {!isMobile ? (
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
            
          </div>
        </Parallax>
      ) : (
        <div className={styles.display} id="grid">
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
        </div>
      )}
    </>
  );
};
