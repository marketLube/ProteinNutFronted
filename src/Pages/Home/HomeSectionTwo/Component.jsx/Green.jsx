import React, { useEffect, useState } from 'react';
import styles from './Green.module.css';
import { Parallax } from 'react-scroll-parallax';

export const Green = () => {
  const [size, setSize] = useState({ width: 155, height: 24 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 30;

      // Calculate the new size based on scroll position
      const newWidth = 155 + (scrollY / speed);
      const newHeight = 24 + (scrollY / speed);
      setSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Parallax className={styles.card} speed={20} >
      
    {/* //   style={{ minWidth: `${size.width}rem`, height: `${size.height}rem` }}> */}
    </Parallax>
  );
};
