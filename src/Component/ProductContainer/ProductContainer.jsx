import React from "react";
import styles from "./ProductContainer.module.css";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const ProductContainer = ({ product }) => {
  console.log(product);

  const currentPrice = product.price - (product.offer / 100);
  console.log(currentPrice);

  console.log(product.avgRatings);

  // Function to render stars based on avgRatings
  const renderStars = (avgRatings) => {
    const stars = [];
    const fullStars = Math.floor(avgRatings);
    const hasHalfStar = avgRatings % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} size={24} className="star" color="orange" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} size={24} className="star" color="orange" />);
    }

    // Add empty stars
    const emptyStarsCount = 5 - Math.ceil(avgRatings);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(<FaStar key={fullStars + 1 + i} size={24} className="star" color="lightgray" />);
    }

    return stars;
  };

  return (
    <div className={styles.productcard} style={{ display: "flex", alignItems: "center" }}>
      <Link style={{ textDecoration: "none" }} to="/select" state={{ product }}>
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
      </Link>
      <button className={styles.addtocartbutton}>Add To Cart</button>
    </div>
  );
};