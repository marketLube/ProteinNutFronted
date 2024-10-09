import React, { useState } from 'react'
import styles from './Counter.module.css'

export const Counter = () => {
    const [quantity, setQuantity] = useState(1);
  return (
    <div>
        <div className="quantity-container">
            <button className="quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>
                +
            </button>
            <button className="size-button">remove</button>
          </div>
    </div>
  )
}
