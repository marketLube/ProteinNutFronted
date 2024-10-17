import React from 'react'
import styles from './ProductDetails.module.css'
import { Counter } from '../Counter/Counter'

export const ProductDetails = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>Product</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      <div className={styles.productContainer}>
        <img 
          src="/Image/Untitled-8-01.png"
          alt="Pineapple Peanut Butter"
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>Pineapple flavoured </h3>
          <h3 className={styles.productTitle}>Peanut Butter</h3>
          <p className={styles.productPrice}>Rs. 349.00</p>
        </div>
        <div className={styles.quantityContainer}>
          <Counter/>
        </div>
        <span className={styles.totalPrice}>Rs. 349.00</span>
      </div>
    </div>
  )
}