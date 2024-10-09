import React from 'react';

export const Community = () => {
  return (
    <div>
      <style>
        {`
        .container-main {
          background-color: #00004d;
        }

        .container {
          display: flex;
          flex-direction: column;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 20px;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0.9; /* Set the desired opacity for the container */
        }

        .container-items {
          //  background-color: #00004d;
        }

        .content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }

        .left-section {
          flex: 1;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          color: #00004d;
          margin-bottom: 16px;
        }

        .description {
          font-size: 19px;
          color: #00004d;
          margin-bottom: 24px;
        }

        .form {
          position: relative;
          width: 80%;
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
        //   bottom:0;
          top:-4rem;
          transform: translateY(50%);
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
          opacity: 0.7;
        
          
        }
          .form-button{
          margin-right:0.5rem;
          }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40px;
        }

        .logo {
          color: #4CAF50;
          font-size: 24px;
          font-weight: bold;
        }

        .menu {
          display: flex;
          gap: 24px;
        }

        .menu-item {
          color: #333;
          text-decoration: none;
        }

        .sl-icons {
          display: flex;
          gap: 16px;
          background-color: #ffd54f;
        }

        .sl-icon {
          color: #4CAF50;
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
                  Get access to new recipes, exciting updates, and <br /> grab Rs.50 off on a pack of peanuts
                </p>
                <div className="form">
                  <input type="email" placeholder="Email address" className="input" />
                  <button className="button">Sign up</button>
                </div>
              </div>
            </div>

            <nav className="nav">
              <div className="logo">Proteinuts</div>
              <div className="menu">
                {/* <a href="#" className="menu-item">Shop</a>
                <a href="#" className="menu-item">Where to buy</a> */}
              </div>
              <div className="sl-icons">
                <div className="sl-icon" />
                <div className="social-icon" />
                <div className="social-icon" />
                {/* <Instagram className="social-icon" />
                <MessageCircle className="social-icon" /> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
