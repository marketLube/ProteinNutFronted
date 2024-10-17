import React from "react";
import styles from "./HomeLandingSection1.module.css";
import { HiArrowCircleRight } from "react-icons/hi";

export const HomeLandingSection1 = () => {
  return (
    <div className={styles.healthyflavr}>
      <h1 className={styles.head}>Healthy flavours. Infinite possibilities</h1>
      <p className={styles.note}>
        Packed with Protein, Powered by Peanut Butter.
      </p>
      <button className={styles.shopnow}>
        <h2>Shop Now</h2>
        <h1>
          <HiArrowCircleRight />
        </h1>
      </button>
    </div>
  );
};
