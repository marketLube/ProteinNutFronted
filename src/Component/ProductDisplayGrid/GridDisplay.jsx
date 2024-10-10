import React from 'react'
import styles from './GridDisplay.module.css'
import { ProductContainer } from '../ProductContainer/ProductContainer'

export const GridDisplay = () => {
  return (
    <div className={styles.detailsproduct}>
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
    </div>
  )
}
