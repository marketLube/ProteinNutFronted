import React from "react";
import { css } from "styled-components";

export const Myaccount = () => {
  return (
    <div>
      <style>
        {css`
          .account-container {
            max-width: 900px;
            margin: auto;
            padding: 18px;
            /* background-color: #2ec780; */
            font-family: Arial, sans-serif;
            width: 100vw;
            /* height: 100vh; */
            /* margin-top: 50rem; */
          }
          .account-header {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            position: relative;
          }
          .account-header span {
            background-color: #ffd700;
            padding: 0 10px;
          }
          .logout-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: transparent;
            border: 2px solid #333;
            color: #333;
            border-radius: 70px;
            font-size: 18px;
            cursor: pointer;
          }
          .logout-button:hover {
            background-color: #f5f5f5;
          }
          .order-history {
            margin-top: 40px;
          }
          .order-history h3 {
            font-size: 24px;
            color: #00004d;
            margin-bottom: 20px;
          }
          .order-item {
            display: flex;
            // justify-content: space-between;
            align-items: center;
            gap: 2rem;
            padding: 15px;
            // background-color: #fff;
            border-radius: 8px;
            // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 15px;
          }

          .order-image {
            width: 55px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
          }

          .order-item span {
            font-size: 12px;
            color: #00004d;
            padding-right: 10px;
          }

          .order-detail {
            margin-right: 80px;

            background-color: #ac0d0d;
          }

          .order-status-track {
            background-color: #00004d;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            width: 80px;
            border: none; /* Remove border */
            outline: none; /* Remove outline */
          }
          .order-status-delivered {
            background-color: #4caf50;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            border: none; /* Remove border */
            outline: none;
          }
        `}
      </style>

      <div className="account-container">
        <h1 className="account-header" id="account">
          <span>My Account</span>
        </h1>

        <button className="logout-button">Log Out</button>
        <div className="order-history">
          <h3>Order History</h3>

          <div className="order-item">
            <div className="order-image"></div>
            <span>Cruchey Peanut Butter 500g x 1</span>
            <button className="order-status-track">Track</button>
          </div>

          <div className="order-item">
            <div className="order-image"></div>
            <span>Creamy Peanut Butter 1KG x 3</span>
            <button className="order-status-delivered">Delivered</button>
          </div>

          <div className="order-item">
            <div className="order-image"></div>
            <span>Pineapple Peanut Butter 500g x 1</span>
            <button className="order-status-delivered">Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
};
