import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export const Community = () => {
  return (
    <div>
      <style>
        {`
        .container-main {
          background-color: #f1d371;
          padding: 30px;
        }

        .container {
          display: flex;
          flex-direction: column;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 20px;
          max-width: 100%;
          height: auto;
          margin: 0 auto;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
        }

        .container-items {
          width: 100%;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 40px;
          width: 100%;
        }

        .left-section {
          text-align: center;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          color: #00004d;
          margin-bottom: 16px;
        }

        .description {
          font-size: 16px;
          color: #00004d;
          margin-bottom: 24px;
        }

        .form {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .input {
          flex: 1;
          padding: 12px 0;
          border: none;
          border-bottom: 2px solid #00004d;
          font-size: 16px;
          outline: none;
          width: 100%;
          z-index: 0;
        }

        .input:focus {
          border-bottom-color: #000;
        }

        .button {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 70px;
          height: 70px;
          background-color: #ffd54f;
          border: none;
          border-radius: 50%;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          opacity: 0.8;
        }

        .nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
        }

        .logo {
          color: #4CAF50;
          font-size: 24px;
          font-weight: bold;
          width: 100px;
          height: auto;
          margin-bottom: 20px;
        }

        .menu {
          display: flex;
          gap: 16px;
        }

        .icons {
          width: 45px;
          height: 45px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Media Queries */
        @media (min-width: 600px) {
          .container {
            padding: 40px;
          }

          .content {
            flex-direction: row;
            justify-content: space-between;
          }

          .left-section {
            text-align: left;
          }

          .title {
            font-size: 28px;
          }

          .description {
            font-size: 18px;
            width: 60%;
          }

          .form {
            max-width: 500px;
          }
        }

        @media (min-width: 768px) {
          .container {
            padding: 60px;
          }

          .title {
            font-size: 32px;
          }

          .description {
            font-size: 20px;
          }

          .form {
            max-width: 600px;
          }
        }

        @media (min-width: 1024px) {
          .container {
            padding: 80px;
          }

          .title {
            font-size: 36px;
          }

          .description {
            font-size: 22px;
          }

          .nav {
            flex-direction: row;
            justify-content: space-between;
          }

          .logo {
            font-size: 32px;
            width: 150px;
          }

          .menu {
            gap: 24px;
          }
        }
        `}
      </style>
      <div className="container-main">
        <div className="container">
          <div className="container-items">
            <div className="content">
              <div className="left-section">
                <h1 className="title">Join our community</h1>
                <p className="description">
                  Get access to new recipes, exciting updates, and grab Rs.50 off on a pack of peanuts
                </p>
                <div className="form">
                  <input type="email" placeholder="Email address" className="input" />
                  <button className="button">Sign up</button>
                </div>
              </div>
            </div>

            <nav className="nav">
              <img src="./Image/Logo.svg" alt="nutslogs" className='logo' />
              <div className="menu">
                <div className='icons'><FaFacebookF /></div>
                <div className='icons'><FaInstagram /></div>
                <div className='icons'><FaWhatsapp /></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
