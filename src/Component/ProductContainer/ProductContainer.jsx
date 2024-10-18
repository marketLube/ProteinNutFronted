import React from "react";
import styles from "./ProductContainer.module.css";
import { Link } from "react-router-dom";

import { FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

export const ProductContainer = () => {
  return (
<<<<<<< HEAD
    <div className={styles.productcard}>
      <Link style={{ textDecoration: "none" }} to="/select">
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
=======
    <div className={styles.productcard} style={{display:"flex",alignItems:"center"}}>
      <Link style={{ textDecoration: "none" }} to="/naturalcrunchy">
        <div  >
          <img
            src="./Image/Untitled-8-01.png"
            alt="Pineapple Peanut Butter"
            className={styles.productimage  + " hover-animation"}
          />
          <div className="imgcircle" ></div>
>>>>>>> master
        </div>

       <div style={{display:"flex", flexDirection:"column"}}>
          <h2 className={styles.producttitle}>
            Pineapple flavoured Peanut Butter
          </h2>
  
          <div style={{padding:"1rem 2rem"}}>
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
