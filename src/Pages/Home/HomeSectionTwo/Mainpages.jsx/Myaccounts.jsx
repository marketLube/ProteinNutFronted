import React from 'react'
import { Bill } from '../Component.jsx/Bill'
import { Myaccount } from '../Component.jsx/Myaccount'
import { Addresses } from '../Component.jsx/Addresses'

export const Myaccounts = () => {
  return (
    <div>
        <style>
        {`
          .formone {
            display: flex;
            background-color: #ffffe6;
            justify-content: space-around;
            padding: 20px;
            gap: 20px; 
            padding-top:150px
          }
        `}
      </style>
      
      <div className="formone">
        <Myaccount/>
        <Addresses/>
      </div>
        
    </div>
  )
}