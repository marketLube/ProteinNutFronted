import React, { useState, useCallback, useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useObserver from "../../../Hooks/useObserver";
import { setIsHome } from "../../../App/generalSlice/generalSlice";
import { StyledSectionOne } from "../../../UI/HomeStyle/SectionOne";
import { MainHeading as StyledMainHeading, SubHeading } from "./StyledComponents/MainHeading";
import BottomCircle from "./BottomCircle";
import styled from 'styled-components';
import { FaCircleArrowRight } from "react-icons/fa6";
import { BannerWrapper, BannerText, ShopNowButton, ButtonContent } from "./StyledComponents/BannerComponents";
import { motion, AnimatePresence } from "framer-motion";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;

function HomeSectionOne() {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  useObserver(targetRef, (isVisible) => dispatch(setIsHome(isVisible)), 1);

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 500); // Reduced to 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleColorChange = useCallback((newColor, oldColor) => {
    setColorIndex((prevIndex) => (prevIndex + 1) % 3);
  }, []);

  return (
    <motion.div
      initial={{ backgroundColor: "#ffd45f" }} // Initial background color
      animate={{
        backgroundColor: isInitialLoad ? "#ffd45f" : "transparent",
        transition: { duration: 0.8, delay: 0.6 },
      }}
      style={{ overflow: "hidden" }}
    >
      <StyledSectionOne ref={targetRef}>
        <AnimatePresence>
          {!isInitialLoad && (
            <ContentWrapper>
              <StyledMainHeading>
                <AnimatedText text="Boost your Day" delay={0.2} />
                
                <div style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  gap: "0",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                }}>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      duration: 0.5
                    }}
                  >
                    
                  </motion.div>
                  <motion.div 
                    animate={{ 
                      opacity: [0, 1],
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 30,
                      duration: 0.5,
                      ease:"easeInOut"
                    }}
                  >
                    <div 
                      style={{display:"flex"}}
                    >
                      <AnimatedText text="with" delay={0.4} />
                      <ChangingText colorIndex={colorIndex } />
                    </div>
                  </motion.div>
                </div>
              </StyledMainHeading>
              <BannerWrapper>
                <BannerText>Packed with Protein, Powered by Peanut Butter.</BannerText>
                <ShopNowButton>
                  <ButtonContent>
                    Shop Now
                    <FaCircleArrowRight style={{ fontSize: '0.8em' }} />
                  </ButtonContent>
                </ShopNowButton>
              </BannerWrapper>
            </ContentWrapper>
          )}
        </AnimatePresence>
        
        <BottomCircle onColorChange={handleColorChange} delay={0.5} />
      </StyledSectionOne>
    </motion.div>
  );
}

function AnimatedText({ text, delay }) {
  const words = text.split(" ");

  return (
    <motion.h1
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "inherit",
        lineHeight: "inherit",
        margin: 0,
      }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            marginRight: "0.25em",
            display: "inline-block",
          }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                delay: index * 0.12 + delay,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function ChangingText({ colorIndex }) {
  const phrases = [
    "Crunchy Energy",
    "Nutty Goodness",
    "Protein Power",
  ];

  return (
    <motion.div
      animate={{
        text: phrases[colorIndex],
        transition: {
          duration: 0.5,
          ease: "easeIn",
          repeat: true,
          repeatType: "loop",
        },
      }}
    >
      <AnimatedText text={phrases[colorIndex]} />
    </motion.div>
  );
}

export default HomeSectionOne;