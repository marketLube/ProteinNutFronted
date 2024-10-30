import React from "react";
import styles from "./RiviewRating.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ReactStars from "react-stars";
import api from "../../services/api";

export const RiviewRating = ({ style, handleClick, refetch, productId }) => {
  const form = useForm({});
  const { register, handleSubmit, setValue } = form;

  // review submiting logic
  const onSubmitftn = async (data) => {
    // const { productId, message, rating, title } = req.body;

    data.productId = productId;
    const res = await api.post("/reviews", data).then((res) => res);
    console.log(res);
    refetch();
    handleClick();
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

        <div className={styles.forms}>
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
            placeholder="Message..."
            //   value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className={`${styles.inputfield} ${styles.descriptioninput}`}
            {...register("message")}
          />
        </div>
        <div className={styles.ratingbutton}>
          <button className={styles.cancelbutton} onClick={handleClick}>
            cancel
          </button>
          <button className={styles.submitbutton}>
            Submit <FaArrowCircleRight className={styles.icn} />
          </button>
        </div>
      </form>
    </motion.div>
  );
};
