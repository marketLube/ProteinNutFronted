import React from 'react';

export const Contactpage = () => {
  return (
    <div>
      <style>
        {`
          .form-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            height: 100vh;
            // background-color: #f5f5e9;
            font-family: Arial, sans-serif;
            position: relative; /* Ensure form-container is the positioning context */
          }
          .form-container label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 20px;
            color: #00004d;
          }
          .form-container input,
          .form-container select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
          }
          .form-container input::placeholder {
            color: #aaa;
            font-weight: normal;
          }
          .form-container .row {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          .form-container .input-small {
            width: 48%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
          }
          .form-container button {
            width: 100%;
            padding: 15px;
            background-color: #00004d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .form-container button:hover {
            background-color: #000;
          }
          .login-link {
            position: absolute;
            top: 20px; /* Adjust as necessary */
            right: 20px; /* Adjust as necessary */
            color: #b3b3b3;
            text-decoration: none;
            font-size: 14px;
            font-weight: bold;
          }
          .form-delivery {
            margin-top: 20px; /* Adjust this value to increase the margin top */
          }
        `}
      </style>

      <div className="form-container">
        <a href="#" className="login-link">Log in</a>
        <form>
          <label>Contact</label>
          <input type="email" placeholder="Email" />

          <div className="form-delivery">
            <label>Delivery</label>
            {/* <select>
              <option>Kerala</option>
            </select> */}

            <div className="row">
              <input type="text" placeholder="First name" className="input-small" />
              <input type="text" placeholder="Last name" className="input-small" />
            </div>

            <input type="text" placeholder="Address Line 1" />
            <input type="text" placeholder="Address Line 2" />

            <div className="row">
              <input type="text" placeholder="City" className="input-small" />
              <input type="text" placeholder="State" className="input-small" />
              <input type="text" placeholder="ZIP code" className="input-small" />
            </div>

            <input type="text" placeholder="Phone" />

            <button type="submit">Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

