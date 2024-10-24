import React from "react";
import { css } from "styled-components";

export const Addresses = () => {
  return (
    <div>
      <style>
        {css`
          .address-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            // background-color: #f5f5e9;
            font-family: Arial, sans-serif;
            margin-top: 10px;
            height: 100vh;
            width: 35rem;
          }
          .address-header {
            font-size: 28px;
            font-weight: bold;
            color: #00004d;
            margin-bottom: 20px;
          }
          .address-card {
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border: 1px solid #eee;
            width: 30rem;
          }
          .address-card h5 {
            font-size: 16px;
            color: #00004d;
            margin-bottom: 10px;
          }
          .address-details {
            font-size: 18px;
            color: #00004d;
            line-height: 1.5;
          }
        `}
      </style>

      <div className="address-container">
        <h2 className="address-header">Addresses</h2>

        <div className="address-card">
          <h5>Name</h5>
          <hr />
          <p className="address-details">
            Name
            <br />
            Location, street, landmark
            <br />
            district, state, Pin: 000 000
          </p>
        </div>
      </div>
    </div>
  );
};
