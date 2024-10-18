import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductRating = ({ rating }) => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={24}
          className={`star ${rating >= index + 1 ? "filled" : ""}`}
          color={rating >= index + 1 ? "orange" : "#ccc"}
        />
      ))}
      {rating % 1 > 0 && <FaStarHalfAlt size={24} className="star" color="orange" />}
    </div>
  );
};

export default ProductRating;