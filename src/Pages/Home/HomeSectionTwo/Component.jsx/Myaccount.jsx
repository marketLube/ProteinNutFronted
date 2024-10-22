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
            padding: 2px;
            font-family: Arial, sans-serif;
            width: 50rem;
            height: 100vh;
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
            align-items: center;
            gap: 2rem;
            padding: 15px;
            margin-bottom: 15px;
          }

          .order-image {
            width: 55px;
            height: 50px;
            background-color: #fff;
            border-radius: 10px;
          }

          .order-item span {
            font-size: 16px;
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
            border: none;
          }

          .order-status-delivered {
            background-color: #4caf50;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            border: none;
          }

          /* Media Queries for Responsive Design */
          @media (max-width: 768px) {
            .account-container {
              width: 100%;
              padding: 10px;
              height: auto;
            }

            .account-header {
              font-size: 28px;
            }

            .logout-button {
              font-size: 16px;
              padding: 8px 15px;
            }

            .order-item {
              flex-direction: row;
              align-items: center;
              gap: 1rem;
              padding: 10px;
            }

            .order-image {
              width: 45px;
              height: 40px;
            }

            .order-item span {
              font-size: 14px;
            }

            .order-status-track {
              width: 2rem;
            }
            .order-status-delivered {
              font-size: 12px;
              padding: 5px;
              width: auto;
            }
          }

          @media (max-width: 480px) {
            .account-header {
              font-size: 24px;
            }

            .logout-button {
              font-size: 14px;
              padding: 6px 12px;
            }

            .order-item {
              gap: 0.5rem;
              padding: 8px;
            }

            .order-image {
              width: 35px;
              height: 30px;
            }

            .order-item span {
              font-size: 12px;
            }

            .order-status-track {
              width: 5rem;
            }
            .order-status-delivered {
              font-size: 10px;
              padding: 4px;
              width: auto;
            }
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
