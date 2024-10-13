import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { StyledCircleDummy } from "./Components/StyledCircleDummy";
import heroImage from "../../../../public/assets/hero-image.png";
import heroImage2 from "../../../../public/assets/hero-image-2.png";
import heroImage3 from "../../../../public/assets/hero-image-3.png";

const colors = [
  "#c6de48",
  "#c2e0c2",
  "#f9d160",
  
];

const StyledCircle = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  bottom: -75px;
  left: 50%;
  transform: translateX(-50%);
`;

const HeroImage1 = styled.img`
  position: absolute;
  bottom: 0%;
  left: 55%;
  right: 50%;
  transform: translateX(-50%) scale(0.7) rotate(20deg) translateY(20%);
  z-index: 2;
  max-width: 100%;
  height: auto;
`;

const HeroImage2 = styled.img`
  position: absolute;
  bottom: -5%;
  left: 52%;
  right: 55%;
  transform: translateX(-80%) scale(0.5) rotate(-30deg) translateY(20%);
  z-index: 1;
  max-width: 100%;
  height: auto;
`;

const heroImages = [heroImage, heroImage2, heroImage3];

function BottomCircle({ onColorChange }) {
  const [colorIndex, setColorIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const circleControls = useAnimation();
  const backgroundControls = useAnimation();

  const animateCircle = async () => {
    // Expand without fading
    await circleControls.start({
      scale: 30,
      y: "-48.33%",
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    });

    // Fade out after expansion
    await circleControls.start({
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    });

    // Reset the circle
    circleControls.start({
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 0 },
    });
  };

  const changeBackground = async () => {
    await backgroundControls.start({
      backgroundColor: colors[colorIndex],
      transition: { duration: 0.3, delay: 1.2 },
    });
  };

  useEffect(() => {
    // Set up the 4-second interval for circle expansion
    const circleInterval = setInterval(() => {
      animateCircle();
    }, 4000);

    // Set up the 4-second interval for color change
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 4000);

    // Set up the 4-second interval for image change
    const imageInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => {
      clearInterval(circleInterval);
      clearInterval(colorInterval);
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    changeBackground();
    onColorChange(colors[colorIndex], colors[(colorIndex - 1 + colors.length) % colors.length]);
  }, [colorIndex, onColorChange]);

  const getCurrentImage = () => heroImages[imageIndex];
  const getNextImage = () => {
    if (imageIndex === 0) return heroImages[0];
    return heroImages[imageIndex];
  };

  return (
    <StyledCircle>
      <Background 
        animate={backgroundControls} 
        initial={{ backgroundColor: colors[0] }} 
      />
      <Circle animate={circleControls} />
      <div>
        <HeroImage1 src={getCurrentImage()} alt={`Hero-img-1-${imageIndex + 1}`} />
        <HeroImage2 src={getNextImage()} alt={`Hero-img-2-${imageIndex + 1}`} />
      </div>
      <StyledCircleDummy/>
    </StyledCircle>
  );
}

export default BottomCircle;
