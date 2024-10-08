import React from 'react'
import { Contactpage } from '../Component.jsx/Contactpage'
import { Bill } from '../Component.jsx/Bill'

export const Contact = () => {
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
        <Contactpage/>
        <Bill/>
      </div>
        
    </div>
  )
}
