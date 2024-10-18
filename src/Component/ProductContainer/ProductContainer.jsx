import React from "react";
import styles from "./ProductContainer.module.css";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import rating icons
import heroImage from "/assets/hero-image.png";

export const ProductContainer = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Pineapple Flavoured Peanut Butter",
      image: heroImage,
      rating: 3.5,
      price: 349,
      originalPrice: 449
    },
    {
      id: 2,
      name: "Pineapple Flavoured Peanut Butter",
      image: heroImage,
      rating: 3,
      price: 349,
      originalPrice: 449
    },
    {
      id: 3,
      name: "Pineapple Flavoured Peanut Butter",
      image: heroImage,
      rating: 4.5,
      price: 349,
      originalPrice: 449
    },
    {
      id: 4,
      name: "Pineapple Flavoured Peanut Butter",
      image: heroImage,
      rating: 5,
      price: 349,
      originalPrice: 449
    },
    
    // Add more products here...
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} size={24} className="star" color="orange" />);
    }

    // Add half star if applicable
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" size={24} className="star" color="orange" />);
    }

    // Fill remaining stars with empty (optional)
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} size={24} className="star" color="lightgray" />);
    }

    return stars;
  };

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id} className={styles.productcard} style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ textDecoration: "none" }} to={`/product/${product.id}`}>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productimage + " hover-animation"}
              />
              <div className="imgcircle"></div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 className={styles.producttitle}>
                {product.name}
              </h2>

              <div style={{ padding: "1rem 2rem" }}>
                {renderStars(product.rating)}
              </div>

              <div className={styles.pricecontainer}>
                <span className={styles.currentprice}>Rs. {product.price}.00</span>
                <span className={styles.originalprice}>Rs. {product.originalPrice}.00</span>
              </div>
            </div>
          </Link>
          <button className={styles.addtocartbutton}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};
