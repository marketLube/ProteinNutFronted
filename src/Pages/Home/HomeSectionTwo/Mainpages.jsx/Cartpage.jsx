import React from 'react'
import { ProductDetails } from '../../../../Component/ProductDisplay/ProductDetails'
import { Checkouts } from '../../../../Component/Checkout/Checkouts'
import { Community } from '../Community'
import styles from './Cartpage.module.css'

export const Cartpage = () => {
  return (
    <div className={styles.maindiv}>
        <h1>Your cart</h1>
        <div className={styles.sectionone}>
            <div><ProductDetails/></div>
            <div><Checkouts/></div>
        </div>
        <div><Community/></div>
    </div>
  )
}
