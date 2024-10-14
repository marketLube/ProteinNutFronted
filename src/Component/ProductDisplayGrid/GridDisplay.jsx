import React from 'react'
import styles from './GridDisplay.module.css'
import { ProductContainer } from '../ProductContainer/ProductContainer'


export const GridDisplay = () => {
  return (
    <div className={styles.display}>
      <p className={styles.heading}>Simple. Delicious. Nutricious.</p>
      <div className={styles.detailsproduct}>
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
        <ProductContainer />
      </div>
    </div>

  )
}
