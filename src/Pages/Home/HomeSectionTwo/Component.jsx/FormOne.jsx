import React from 'react';

export const FormOne = () => {
  return (
    <div>
      <style>
        {`
          .form-container {
            max-width: 400px;
            margin: auto;
            padding: 1px;
            height:100vh;
            width:150rem;
            
        
          }
          .form-container label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            font-size: 25px;
          }
          .form-container input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #00004d;
            border-radius: 5px;
          }
            .form-container input::placeholder {
            color: #00004d; 
            font-weight:bold;
          }
          .form-container button {
            width: 100%;
            padding: 10px;
            background-color: #00004d;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .form-container button:hover {
            background-color: #00004d;
          }
        `}
      </style>
      <div className="form-container">
        <form>
          <label>Payment</label>
          <input type="text" placeholder="UPI" />
          <label>Or</label>
          <div>
            <input type="text" placeholder="Card Payment" />
            <span aria-hidden="true"></span>
          </div>
          <button type="submit">Payment</button>
        </form>
      </div>
    </div>
  );
};

