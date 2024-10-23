import React from "react";
import styles from "./RiviewRating.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ReactStars from "react-stars";

export const RiviewRating = ({ style }) => {
  const form = useForm({});
  const { register, handleSubmit, setValue } = form;

  const onSubmitftn = (data) => {
    console.log(data);
  };

  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };
  const ratingChanged = (newRating) => {
    setValue("rating", newRating);
    console.log("New Rating: ", newRating);
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 1 }}
      className={styles.productratingcontainer}
      style={style}
    >
      <h2>Rate this product</h2>
      <form onSubmit={handleSubmit(onSubmitftn)}>
        <div className={styles.stars}>
          <ReactStars
            onChange={ratingChanged}
            color2={"#ffd700"}
            size={24}
            {...setValue("rating")}
          />
        </div>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="Title..."
            //   value={title}
            // onChange={(e) => setTitle(e.target.value)}
            className={`${styles.inputfield} ${styles.titleinput}`}
            {...register("title")}
          />
          <textarea
            type="text"
            placeholder="Description..."
            //   value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className={`${styles.inputfield} ${styles.descriptioninput}`}
            {...register("Description")}
          />
        </div>
        <button className={styles.submitbutton}>
          Submit <FaArrowCircleRight className={styles.icn} />
        </button>
      </form>
    </motion.div>
  );
};
