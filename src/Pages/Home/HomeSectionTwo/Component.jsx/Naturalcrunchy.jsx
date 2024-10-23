import React, { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const ProductDisplay = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");

  // Calculate sale price
  const salePrice = product.price - product.price * (product.offer / 100);

  // Function to render stars based on rating
  const renderStars = (avgRatings) => {
    const stars = [];
    const fullStars = Math.floor(avgRatings); // Full stars
    const hasHalfStar = avgRatings % 1 >= 0.5; // Check for half star

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} size={24} className="star" color="orange" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key={fullStars}
          size={24}
          className="star"
          color="orange"
        />
      );
    }

    // Add empty stars
    const emptyStarsCount = 5 - Math.ceil(avgRatings);
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <FaStar
          key={fullStars + 1 + i}
          size={24}
          className="star"
          color="lightgray"
        />
      );
    }

    return stars;
  };

  // Function to handle location check based on pincode
  const checkAvailability = () => {
    // Mock location check based on pincode
    if (pincode === "673019") {
      setLocation("Olavanna, Kozhikode");
    } else {
      setLocation("Location not available");
    }
  };

  return (
    <div>
      <style>
        {css`
          .container-main {
            padding: 20px;
          }

          .container {
            max-width: 419px;
            margin: 0 auto;
            padding: 40px;
            background-color: white;
            border-radius: 20px;
          }

          .category-tag {
            display: inline-block;
            padding: 8px 16px;
            background-color: #fff9f2;
            border-radius: 20px;
            margin-bottom: 16px;
            color: #00004d;
            font-weight: bold;
          }

          .product-title {
            font-size: 32px;
            color: #00004d;
            margin-bottom: 16px;
          }

          .rating-container {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
          }

          .star {
            color: #ffd700;
          }

          .review-count {
            color: #666;
            margin-left: 8px;
          }

          .top-rated {
            color: #4caf50;
            font-weight: bold;
            margin-bottom: 16px;
          }

          .price-container {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
          }

          .current-price {
            font-size: 24px;
            font-weight: bold;
            color: #00004d;
          }

          .original-price {
            text-decoration: line-through;
            color: #666;
          }

          .discount {
            color: #4caf50;
            font-size: 14px;
          }

          .location-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
          }

          .quantity-container {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
          }

          .quantity-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border: 1px solid #00004d;
            border-radius: 50%;
            background: none;
            cursor: pointer;
          }

          .quantity-display {
            font-size: 18px;
          }

          .size-button {
            padding: 8px 16px;
            background-color: #fff9f2;
            border: none;
            border-radius: 4px;
            margin-left: 16px;
            font-weight: bold;
          }

          .button-container {
            display: flex;
            gap: 16px;
            margin-bottom: 24px;
          }

          .check-availability {
            padding: 12px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 10px;
            cursor: pointer;
            font-weight: bold;
          }

          .add-to-cart {
            flex: 1;
            padding: 12px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
          }

          .buy-now {
            flex: 1;
            padding: 12px;
            background-color: #ffd54f;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            font-weight: bold;
            color: 00004d;
          }

          .description {
            color: #00004d;
            line-height: 1.6;
            font-size: 15px;
          }
        `}
      </style>

      <div className="container-main">
        <div className="container">
          <span className="category-tag">{product?.category}</span>
          <h1 className="product-title">{product?.name}</h1>

          <div className="rating-container">
            {renderStars(product?.avgRatings)}
            <span className="review-count">{product?.ratingQty} Reviews</span>
          </div>

          <div className="top-rated">{product?.statistic}</div>

          <div className="price-container">
            <span className="current-price">₹{salePrice}</span>
            <span className="original-price">₹{product?.price}</span>
            <span className="discount">{product?.offer}% Off</span>
          </div>

          <div className="location-container">
            <div className="location-container-num">
              <input
                type="number"
                className="pincode"
                placeholder="Enter the pincode"
                onChange={(e) => setPincode(e.target.value)}
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  width: "80%",
                  padding: "10px",
                }}
              />
            </div>
            <div className="location-container-text">
              {location ? (
                <span>{location}</span>
              ) : (
                <button
                  className="check-availability"
                  onClick={checkAvailability}
                >
                  Check Availability
                </button>
              )}
            </div>
          </div>

          <div className="quantity-container">
            <button
              className="quantity-button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button
              className="quantity-button"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <button className="size-button">1 KG</button>
          </div>

          <div className="button-container">
            <button className="add-to-cart">Add to cart</button>
            <Link to="/homesectiontwo">
              <button className="buy-now">Buy Now</button>
            </Link>
          </div>

          <p className="description">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};
