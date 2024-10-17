import React from 'react';
import { FormOne } from '../Component.jsx/FormOne';
import { Bill } from '../Component.jsx/Bill';

export const Pages = () => {
  return (
    <div>
      <style>
        {`
          // .formone {
          //   display: flex;
          //   background-color: #ffffe6;
          //   justify-content: space-around;
          //   padding: 20px;
          //   gap: 20px; 
          //   padding-top:150px
          // }
        `}
      </style>
      
      <div className="formone">
        <FormOne />
        <Bill />
      </div>
    </div>
  );
};
