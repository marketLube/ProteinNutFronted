import React from "react";
import styles from "./SelectedProduct.module.css";

export const SelectedProduct = ({product}) => {
  return (
    <div className={styles.main}>
      <img
        src={product?.image[0]}
        alt="Selected product"
        className={styles.firstimg}
      />

      <div className={styles.firstsection}>
        <img src={product?.image[1]} alt={product?.name} />
        <img src={product?.image[2]} alt={product?.name} />
        <img src={product?.image[3]} alt={product?.name} />
      </div>
    </div>
  );
};
