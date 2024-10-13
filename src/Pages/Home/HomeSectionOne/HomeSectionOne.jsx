import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useObserver from "../../../Hooks/useObserver";
import { setIsHome } from "../../../App/generalSlice/generalSlice";
import { StyledSectionOne } from "../../../UI/HomeStyle/SectionOne";
import { MainHeading as StyledMainHeading } from "./StyledComponents/MainHeading";
import { StyledProteinBanner } from "./StyledComponents/ProteinBanner";
import { motion } from "framer-motion";
import BottomCircle from "./BottomCircle";
import styled from 'styled-components';
import { StyledCircleDummy } from "./Components/StyledCircleDummy";
// import 

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 110%;
  position: relative;
  z-index: 2;
`;

const AnimatedText = ({ text, delay }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", justifyContent: "center",  }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: "0.25em", display: "inline-block" }}
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const CurlingText = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    hidden: { 
      y: 0,
      rotateX: 0,
      scale: 1,
    },
    visible: i => ({
      y: Math.sin(i * 0.5) * 10,
      rotateX: -360,
      scale: [1, 1.2, 1],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeInOut",
        },
        rotateX: {
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.5,
          times: [0, 0.5, 1],
        },
      },
    }),
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", marginRight: "0.05em" }}
          custom={index}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

function HomeSectionOne() {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  useObserver(targetRef, (isVisible) => dispatch(setIsHome(isVisible)), 1);

  return (
    <StyledSectionOne ref={targetRef}>
      <ContentWrapper>
        <StyledMainHeading>
          <AnimatedText text="Boost your Day" delay={0.2} />
          <AnimatedText text="With Crunchy Energy" delay={0.8} />
        </StyledMainHeading>
        
        <StyledProteinBanner>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          <div className="banner-stripe"></div>
          
          <div className="banner-content">
            <p className="banner-text">Packed with Protein, Powered by Peanut Butter.</p>
            <button className="shop-button">
              <span className="button-text">
                <CurlingText text="Shop Now" />
              </span>
              <span className="arrow-circle">
                <span className="arrow"></span>
              </span>
            </button>
          </div>
        </StyledProteinBanner>
      </ContentWrapper>
      
      
      <BottomCircle />
      <StyledCircleDummy/>
    </StyledSectionOne>
  );
}

export default HomeSectionOne;
