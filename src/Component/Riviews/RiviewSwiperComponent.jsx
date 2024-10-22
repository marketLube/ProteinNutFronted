import React from "react";
import styles from "./RiviewSwiperComponent.module.css";

export const RiviewSwiperComponent = () => {
  return (
    <div>
      <div className={styles.reviewbox}>
        <div className={styles.reviewrating}>
          <span className={styles.ratingbadge}>4★</span>
          <span className={styles.ratingtext}>Excellent</span>
        </div>
        <p className={styles.reviewtext}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet.
        </p>
        <p className={styles.reviewerinfo}>Varun Viswan, Calicut</p>
      </div>
    </div>
  );
};
