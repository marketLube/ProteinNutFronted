import React from "react";
import styles from "./HomeLandingSection1.module.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { Parallax } from "react-scroll-parallax";
import ShopButton from "./ShopButton/ShopButton";

export const HomeLandingSection1 = () => {
  return (
    <>
      <Parallax speed={40} className={styles.healthyflavr} id="community">
        <h1 className={styles.head}>
          Healthy flavours. Infinite possibilities
        </h1>
        <p className={styles.note}>
          Packed with Protein, Powered by Peanut Butter.
        </p>
        <ShopButton style={{ margin: "3rem" }} />
      </Parallax>
    </>
  );
};
