import React from "react";
import styles from "./SelectedProduct.module.css";

export const SelectedProduct = () => {
  return (
    <div className={styles.main}>
      <img
        src="./Image/Untitled-8-01.png"
        alt="Selected product"
        className={styles.firstimg}
      />

      <div className={styles.firstsection}>
        <img src="./Image/Untitled-8-01.png" alt="Selected product" />
        <img src="./Image/Untitled-8-01.png" alt="Selected product" />
        <img src="./Image/Untitled-8-01.png" alt="Selected product" />
      </div>
    </div>
  );
};
