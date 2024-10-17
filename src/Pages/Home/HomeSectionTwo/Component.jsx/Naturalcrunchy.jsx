import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Star, Plus, Minus } from 'lucide-react';

export const ProductDisplay = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <style>
        {`
          .container-main {
            // background-color: #fff9f2;
            padding: 20px;
            
          }

          .container {
            max-width: 419px;
            margin: 0 auto;
            padding: 40px;
            background-color: white;
            border-radius: 20px;
            background-color:#ffffff

          }

          .category-tag {
            display: inline-block;
            padding: 8px 16px;
            background-color: #fff9f2;
            border-radius: 20px;
            margin-bottom: 16px;
            color:#00004d;
            font-weight:bold;
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
            color: #4CAF50;
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
            color: #4CAF50;
            font-size:14px
          }

          .location-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
            
          }
            .location-container-num{
            color:#666;
            }

          .quantity-container {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
            
          }
            .location-container-text{
            color:#4CAF50;
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
            font-weight:bold;
            
          }

          .button-container {
            display: flex;
            gap: 16px;
            margin-bottom: 24px;
            
          }

          .add-to-cart {
            flex: 1;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            font-weight:bold;
          }

          .buy-now {
            flex: 1;
            padding: 12px;
            background-color: #ffd54f;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            font-weight:bold;
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
          <span className="category-tag">Peanut Butter</span>
          <h1 className="product-title">Natural Crunchy Peanut Butter 1KG</h1>

          <div className="rating-container">
            {/* {[...Array(4)].map((_, i) => (
              <Star key={i} className="star" fill="#ffd700" />
            ))}
            {[...Array(1)].map((_, i) => (
              <Star key={i} className="star" />
            ))} */}
            <span className="review-count">12 Reviews</span>
          </div>

          <div className="top-rated">Top Rated</div>

          <div className="price-container">
            <span className="current-price">₹349.00</span>
            <span className="original-price">₹698.00</span>
            <span className="discount">50% Off</span>
          </div>

          <div className="location-container">
            <div className="location-container-num">
              <span>673019</span>
            </div>
            <div className="location-container-text">
              <span>Olavanna,Kozhikode</span>
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

          <p className="description">
            Enjoy the rich taste of 100% natural, roasted peanuts with a
            satisfying crunch. Packed with protein and free from preservatives,
            added sugars, or artificial flavors, Proteinuts is the perfect
            healthy snack for any time of day. Fuel your body naturally!
          </p>
        </div>
      </div>
    </div>
  );
};
