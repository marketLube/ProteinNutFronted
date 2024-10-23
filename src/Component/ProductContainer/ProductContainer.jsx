// ProductContainer.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ProductContainer.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const ProductContainer = ({ product }) => {
  const navigate = useNavigate();

  const currentPrice = product.price - (product.price * (product.offer / 100));

  const handleProductClick = () => {
    // Navigate programmatically and scroll to top
    navigate("/select", { state: { product } });
    window.scrollTo(0, 0);
  };

  const renderStars = (avgRatings) => {
    const stars = [];
    const fullStars = Math.floor(avgRatings);
    const hasHalfStar = avgRatings % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} size={24} className="star" color="orange" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} size={24} className="star" color="orange" />);
    }

    const emptyStarsCount = 5 - Math.ceil(avgRatings);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(<FaStar key={fullStars + 1 + i} size={24} className="star" color="lightgray" />);
    }

    return stars;
  };

  return (
    <div className={styles.productcard} style={{ display: "flex", alignItems: "center" }}>
      <div onClick={handleProductClick} style={{ cursor: "pointer", textDecoration: "none" }}>
        <div>
          <img
            src={product?.image[0]}
            alt={product?.name}
            className={`${styles.productimage} hover-animation`}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: ".5rem" }}>
          <h2 className={styles.producttitle}>{product?.name}</h2>

          <div style={{ padding: "10px 3rem" }}>
            {renderStars(product.avgRatings)}
          </div>

          <div className={styles.pricecontainer}>
            <span className={styles.currentprice}>Rs. {currentPrice}</span>
            <span className={styles.originalprice}>Rs. {product?.price}</span>
          </div>
        </div>
      </div>
      <button className={styles.addtocartbutton}>Add To Cart</button>
    </div>
  );
};