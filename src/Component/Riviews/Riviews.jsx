import React, { useState } from "react";
import styles from "./Riviews.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swipercomponent } from "../Reelsection/Swipercomponent";
import { RiviewSwiperComponent } from "./RiviewSwiperComponent";
import { MdOutlineStarBorder } from "react-icons/md";
import { RiviewRating } from "./RiviewRating";
import { useQuery } from "@tanstack/react-query";
import api from "../../services/api";

export const Riviews = ({ productid }) => {
  const [isRatingform, setisRatingform] = useState(false);
  const [isReview, setisReview] = useState();

  const handleClick = () => {
    setisRatingform(!isRatingform);
  };
  const {
    data: review,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["productriview"],
    queryFn: () =>
      api
        .get(`/reviews/product/${productid}`)
        .then((res) => res.data.data.reveiws),
  });

  console.log(review, "data");
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
        <span className={styles.reviewcount}>{review?.ratingQty} Reviews</span>
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

      {review?.map((review, id) => (
        <RiviewSwiperComponent review={review} key={id} />
      ))}
    </div>
  );
};
