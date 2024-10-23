import React, { useState } from "react";
import styles from "./Riviews.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swipercomponent } from "../Reelsection/Swipercomponent";
import { RiviewSwiperComponent } from "./RiviewSwiperComponent";
import { MdOutlineStarBorder } from "react-icons/md";
import { RiviewRating } from "./RiviewRating";

export const Riviews = () => {
  const [isRatingform, setisRatingform] = useState(false);

  const handleClick = () => {
    setisRatingform(!isRatingform);
  };
  return (
    <div className={styles.reviewsandratings}>
      <div className={styles.header}>
        <h2>Reviews & Ratings</h2>
        <button className={styles.rateproductbtn} onClick={handleClick}>
          Rate Product <FaArrowCircleRight className={styles.iicon} />
        </button>
      </div>
      <div className={styles.rating}>
        <div className={styles.stars}>
          {[1, 2, 3, 4].map((star) => (
            <MdOutlineStarBorder key={star} className={styles.starfilled} />
          ))}
          <MdOutlineStarBorder className={styles.star} />
        </div>
        <span className={styles.reviewcount}>12 Reviews</span>
      </div>

      {isRatingform ? (
        <RiviewRating
          style={
            isRatingform
              ? { transform: "scaleX(1)" }
              : { transform: "scaleX(0)" }
          }
        />
      ) : null}

      <RiviewSwiperComponent />
      <RiviewSwiperComponent />
      <RiviewSwiperComponent />
      <RiviewSwiperComponent />
      <RiviewSwiperComponent />
    </div>
  );
};
