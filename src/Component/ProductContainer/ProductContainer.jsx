import React from "react";
import styles from "./ProductContainer.module.css";
import { Link } from "react-router-dom";

export const ProductContainer = () => {
  return (
    <div className={styles.productcard}>
      <Link to="/naturalcrunchy">
        <img
          src="./Image/Untitled-8-01.png"
          alt="Pineapple Peanut Butter"
          className={styles.productimage}
        />
        <div className="imgcircle"></div>

        <h2 className={styles.producttitle}>
          Pineapple flavoured Peanut Butter
        </h2>

        <div className="rating-container">
          {/* {[...Array(4)].map((_, index) => (
          <Star key={index} className="star" fill="#f6ad55" />
        ))}
        <Star className="star" /> */}
        </div>

        <div className={styles.pricecontainer}>
          <span className={styles.currentprice}>Rs. 349.00</span>
          <span className={styles.originalprice}>Rs. 449.00</span>
        </div>
      </Link>
      <button className={styles.addtocartbutton}>Add To Cart</button>
    </div>
  );
};
