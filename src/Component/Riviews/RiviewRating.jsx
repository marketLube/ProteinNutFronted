import React from "react";
import styles from "./RiviewRating.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { motion } from "framer-motion";

export const RiviewRating = ({ style }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 1 }}
      className={styles.productratingcontainer}
      style={style}
    >
      <h2>Rate this product</h2>
      <form>
        <div className={styles.stars}>
          {[1, 2, 3, 4].map((star) => (
            <MdOutlineStarBorder key={star} className={styles.starfilled} />
          ))}
          <MdOutlineStarBorder className={styles.star} />
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
    </motion.div>
  );
};
