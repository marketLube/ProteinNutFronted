import React from "react";
import { ProductDetails } from "../../../../Component/ProductDisplay/ProductDetails";
import { ProductDisplay } from "../Component.jsx/Naturalcrunchy";
import { SelectedProduct } from "../Component.jsx/SelectedProduct";

export const SelectedItem = () => {
  return (
    <div>
      <style>
        {`
          .formone {
            display: flex;
            background-color: #ffffe6;
            // justify-content: space-around;
            padding: 20px;
            gap: 20px; 
            padding-top:150px
          }
        `}
      </style>
      <div className="formone">
        <SelectedProduct />
        <ProductDisplay />
      </div>
    </div>
  );
};
