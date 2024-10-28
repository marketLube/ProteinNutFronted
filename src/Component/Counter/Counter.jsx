import React from "react";
import styles from "./Counter.module.css";

export const Counter = ({ quantity, setQuantity }) => {
  return (
    <div>
      <div className={styles.quantitycontainer}>
        <button
          className={styles.quantitybutton}
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </button>
        <span className={styles.quantitydisplay}>{quantity}</span>
        <button
          className={styles.quantitybutton}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <button className={styles.removebutton}>Remove</button>
      </div>
    </div>
  );
};
