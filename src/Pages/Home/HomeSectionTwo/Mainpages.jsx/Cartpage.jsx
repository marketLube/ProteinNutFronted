import React, { useEffect, useRef, useState } from "react";
import { ProductDetails } from "../../../../Component/ProductDisplay/ProductDetails";
import { Checkouts } from "../../../../Component/Checkout/Checkouts";
import { Community } from "../Community";
import styles from "./Cartpage.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useObserver from "../../../../Hooks/useObserver";

export const Cartpage = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackground, setShowBackground] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

  const targetRef = useRef(null);
  const dispatch = useDispatch();
  useObserver(targetRef,(isVisible)=> dispatch(setIsCart(isVisible)),.8);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowBackground(position > 100);
    };
  
    // Scroll to top when component mounts
    if (shouldScrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setShouldScrollToTop(false);
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldScrollToTop]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowBackground(position > 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const getBackgroundStyles = () => {
    // Base styles
    const baseStyles = {
      position: 'fixed',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      zIndex: 5,
      opacity: 1,
      width: "92%",
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'top 0.3s ease-in-out',
      pointerEvents: 'none',
      borderBottomLeftRadius: '4rem',
      borderBottomRightRadius: '4rem',
    };

    // For iPhone 14 Pro Max and similar large devices (428px width)
    if (windowWidth >= 1024) {
      return {
        ...baseStyles,
        top: showBackground ? '0' : '-10%',
        height: '9rem',
        
      };
    }

    // For smaller devices
    return {
      ...baseStyles,
      top: showBackground ? '0' : '-11.5%',
      height: '11.5%',
    };
  };
  return (
    <div className={styles.maindiv} >
      <div style={getBackgroundStyles() } />
      <h1 className={styles.carthead}>Your cart</h1>
      <div className={styles.sectionone}>
        <div>
          <ProductDetails />
        </div>
        <div>
          <Checkouts />
        </div>
      </div>
      <div>
        <Community />
      </div>
    </div>
  );
};
