import React, { useRef } from "react";
import styles from "./GridDisplay.module.css";
import { ProductContainer } from "../ProductContainer/ProductContainer";
import { Parallax } from "react-scroll-parallax";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../SkeltonLoader/SkeltonLoader";

export const GridDisplay = ({products,isLoading,error}) => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { amount: 0.3 });

  // const {
  //   data: products,
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => api.get("/products").then((res) => res?.data.docs),
  // });

  console.log(products);
  

  

  return (
    <Parallax className={styles.display} id="grid">
      <motion.h2
        ref={targetRef}
        initial={{ y: 50 }}
        animate={isInView ? { y: 0 } : { y: 50 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={styles.headingSecondary}
      >
        <div className={styles.headingFirst}>
          <div className={styles.simple}>Simple</div>
          <div style={{ overflow: "hidden" }}>
            <motion.div
              className={styles.delicious}
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : { y: 100 }}
              transition={{
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.1,
              }}
            >
              Delicious
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  originX: 0, // Ensures scaling starts from left
                }}
                className={styles.yellowBg}
                style={{
                  transformOrigin: "left", // Backup CSS transform origin
                }}
              />
            </motion.div>
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: 100 }}
            animate={isInView ? { y: 0 } : { y: 100 }}
            transition={{
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2,
            }}
            className={styles.nutircious}
          >
            Nutricious
          </motion.div>
        </div>
      </motion.h2>

      <div className={styles.detailsproduct}>
        {isLoading ? (
          // Show skeletons while loading
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        ) : error ? (
          <div className={styles.error}>{error.message}</div>
        ) : products?.length === 0 ? (
          <div className={styles.noProducts}>No products available.</div>
        ) : (
          products.map((product, i) => (
            <ProductContainer product={product} key={i} />
          ))
        )}
      </div>
    </Parallax>
  );
};
