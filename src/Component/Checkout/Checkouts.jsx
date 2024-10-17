import React from "react";
import styles from "./Checkouts.module.css";
import { Buttons } from "../Button/Buttons";
import { useNavigate } from "react-router-dom";

export const Checkouts = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/contactpage");
  };

  return (
    <div className={styles.card}>
      <div className={styles.freeShippingMessage}>
        You are Rs.50 away from free shipping.
      </div>
      <div className={styles.content}>
        <div className={styles.contentdetail}>
          <div className={styles.quantityLabel}>Quantity</div>
          <div className={styles.price}>Rs. 349.00</div>
        </div>

        <Buttons onClick={onClick} />

        <div className={styles.footer}>
          Taxes and shipping calculated at checkout
        </div>
      </div>
    </div>
  );
};
