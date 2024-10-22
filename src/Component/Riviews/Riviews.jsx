import React from "react";
import styles from "./Riviews.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swipercomponent } from "../Reelsection/Swipercomponent";
import { RiviewSwiperComponent } from "./RiviewSwiperComponent";
import { MdOutlineStarBorder } from "react-icons/md";

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
          {[1, 2, 3, 4].map((star) => (
            <MdOutlineStarBorder key={star} className="star filled" />
          ))}
          <MdOutlineStarBorder className="star" />
        </div>
        <span className={styles.reviewcount}>12 Reviews</span>
      </div>
      <RiviewSwiperComponent />
    </div>
  );
};
