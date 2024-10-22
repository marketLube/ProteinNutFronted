import React from "react";

export const Riviews = () => {
  return (
    <div className="reviews-and-ratings">
      <div className="header">
        <h2>Reviews & Ratings</h2>
        <button className="rate-product-btn">
          {/* Rate Product <ChevronRight className="chevron-icon" /> */}
        </button>
      </div>
      <div className="rating">
        <div className="stars">
          {/* {[1, 2, 3, 4].map((star) => (
            <Star key={star} className="star filled" />
          ))}
          <Star className="star" /> */}
        </div>
        <span className="review-count">12 Reviews</span>
      </div>
      <div className="review-box">
        <div className="review-rating">
          {/* <span className="rating-badge">4★</span> */}
          <span className="rating-text">Excellent</span>
        </div>
        <p className="review-text">
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet"
        </p>
        <p className="reviewer-info">Varun Viswan, Calicut</p>
      </div>
    </div>
  );
};
