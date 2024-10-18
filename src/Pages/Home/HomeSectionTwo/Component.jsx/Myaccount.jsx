import React from "react";

export const Myaccount = () => {
  return (
    <div>
      <style>
        {`
          .account-container {
            max-width: 900px;
            margin: auto;
            padding: 2px;
            font-family: Arial, sans-serif;
            width: 100%;
            height: auto;
          }
          .account-header {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            position: relative;
          }
          .account-header span {
            background-color: #FFD700;
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
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
          }
          
          .order-image {
            width: 55px;
            height: 50px;
            background-color: #00004d;
            border-radius: 10px;
          }

          .order-item span {
            font-size: 16px;
            color: #00004d;
            flex-grow: 1;
          }

          .order-detail {
            background-color: #ac0d0d;
          }

          .order-status-track, .order-status-delivered {
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            width: 80px;
            border: none;
            outline: none;
          }

          .order-status-track {
            background-color: #00004d;
            color: white;
          }

          .order-status-delivered {
            background-color: #4CAF50;
            color: white;
          }

          @media (max-width: 768px) {
            .account-header {
              font-size: 28px;
            }

            .logout-button {
              font-size: 16px;
              padding: 8px 16px;
            }

            .order-history h3 {
              font-size: 20px;
            }

            .order-item span {
              font-size: 14px;
            }

            .order-status-track, .order-status-delivered {
              font-size: 12px;
              width: 70px;
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

            .order-history h3 {
              font-size: 18px;
            }

            .order-item {
              // flex-direction: column;
              // align-items: flex-start;
              gap: 1rem;
            }

            .order-item span {
              font-size: 12px;
            }

            .order-status-track, .order-status-delivered {
              font-size: 10px;
              width: 60px;
            }
          }
        `}
      </style>

      <div className="account-container">
        <h1 className="account-header">
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
