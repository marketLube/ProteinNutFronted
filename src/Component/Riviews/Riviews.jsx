import React from "react";
import styles from "./Riviews.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

export const Riviews = () => {
  return (
    <div className={styles.reviewsandratings}>
      <div className={styles.header}>
        <h2>Reviews & Ratings</h2>
        <button className={styles.rateproductbtn}>
          Rate Product <FaArrowCircleRight className={styles.iicon} />
        </button>
      </div>
      <div className={styles.rating}>
        <div className="stars">
          {/* {[1, 2, 3, 4].map((star) => (
            <Star key={star} className="star filled" />
          ))}
          <Star className="star" /> */}
        </div>
        <span className={styles.reviewcount}>12 Reviews</span>
      </div>
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
