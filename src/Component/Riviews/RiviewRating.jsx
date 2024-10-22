import React from "react";
import styles from "./RiviewRating.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

export const RiviewRating = () => {
  return (
    <div className={styles.productratingcontainer}>
      <h2>Rate this product</h2>
      <form>
        <div className="star-rating">
          {/* {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={star ${rating >= star ? 'filled' : ''}}
          onClick={() => setRating(star)}
        />
      ))} */}
        </div>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Title..."
            //   value={title}
            // onChange={(e) => setTitle(e.target.value)}
            className={`${styles.inputfield} ${styles.titleinput}`}
          />
          <textarea
            placeholder="Description..."
            //   value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className={`${styles.inputfield} ${styles.descriptioninput}`}
          />
        </div>
        <button className={styles.submitbutton}>
          Submit <FaArrowCircleRight className={styles.icn} />
        </button>
      </form>
    </div>
  );
};
