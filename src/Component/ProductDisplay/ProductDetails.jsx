import React from "react";
import styles from "./ProductDetails.module.css";
import { Counter } from "../Counter/Counter";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const isMobile = useSelector(function (state) {
    return state.endpoint.isMobile;
  });
  console.log(isMobile, "iii");

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>Product</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img
            src="/Image/672px X 707px-01.svg"
            alt="Pineapple Peanut Butter"
            className={styles.productImage}
          />
        </div>
        <div className={styles.det}>
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>
              Pineapple flavoured Peanut Butter
            </h3>
            {/* <h3 className={styles.productTitle}></h3> */}
            <p className={styles.productPrice}>Rs. 349.00</p>
          </div>
          <div className={styles.quantityContainer}>
            <Counter />
          </div>
        </div>
        {isMobile ? null : (
          <span className={styles.totalPrice}>Rs. 349.00</span>
        )}
      </div>
    </div>
  );
};
