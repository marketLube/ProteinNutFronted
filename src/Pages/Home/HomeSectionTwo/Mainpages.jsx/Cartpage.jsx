import React, { useEffect, useRef, useState } from "react";
import { ProductDetails } from "../../../../Component/ProductDisplay/ProductDetails";
import { Checkouts } from "../../../../Component/Checkout/Checkouts";
import { Community } from "../Community";
import styles from "./Cartpage.module.css";
import { Link } from "react-router-dom";

export const Cartpage = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackground, setShowBackground] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowBackground(position > 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const getBackgroundStyles = () => {
    // Base styles
    const baseStyles = {
      position: "fixed",
      left: 0,
      right: 0,
      backgroundColor: "rgba(255, 255, 255, 1)",
      zIndex: 5,
      opacity: 1,
      width: "92%",
      margin: "0 auto",
      transition: "top 0.3s ease-in-out",
      borderBottomLeftRadius: "4rem",
      borderBottomRightRadius: "4rem",
    };

    // here the top position is changing
    if (windowWidth >= 1024) {
      return {
        ...baseStyles,
        top: showBackground ? "0" : "-10%",
        height: "9rem",
      };
    }
  };
  return (
    <div className={styles.maindiv}>
      <div style={getBackgroundStyles()} />
      <h1 className={styles.carthead}>Your cart</h1>
      <div className={styles.sectionone}>
        <ProductDetails />
        <Checkouts />
      </div>
      <div className={styles.sectiontwo}>
        <Community />
      </div>
    </div>
  );
};
