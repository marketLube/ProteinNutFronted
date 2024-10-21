import React from "react";
import styles from "./ProductContainer.module.css";
import { Link } from "react-router-dom";

import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

export const ProductContainer = ({ item }) => {
  console.log(item);
  return (
    <div
      className={styles.productcard}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link style={{ textDecoration: "none" }} to="/select">
        <div>
          <img
            src="./Image/Untitled-8-01.png"
            alt="Pineapple Peanut Butter"
            className={styles.productimage + " hover-animation"}
          />
          <div className="imgcircle"></div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className={styles.producttitle}>
            Pineapple flavoured Peanut Butter
          </h2>

          <div style={{ padding: "1rem 2rem" }}>
            <FaStar size={24} className="star" color="orange" />
            <FaStar size={24} className="star" color="orange" />
            <FaStar size={24} className="star" color="orange" />
            <FaStar size={24} className="star" color="orange" />
            <FaStarHalfAlt size={24} className="star" color="orange" />
          </div>

          <div className={styles.pricecontainer}>
            <span className={styles.currentprice}>Rs. 349.00</span>
            <span className={styles.originalprice}>Rs. 449.00</span>
          </div>
        </div>
      </Link>
      <button className={styles.addtocartbutton}>Add To Cart</button>
    </div>
  );
};
