import { HomeLandingSection1 } from "../../Component/HomeLandingSection1";
import Landingimg from "../../Component/Modelimage/Landingimg";
import { GridDisplay } from "../../Component/ProductDisplayGrid/GridDisplay";
import { Reels } from "../../Component/Reelsection/Reels";
import Main from "../../Layout/Main";
import { Green } from "../Green/Green";
import HomeSectionOne from "./HomeSectionOne/HomeSectionOne";
import { Community } from "./HomeSectionTwo/Community";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

const SmoothScrollSection = styled(motion.div)`
  position: relative;
  width: 100%;
`;

function Home() {
  const { scrollY } = useScroll();

  const smoothY = useSpring(scrollY, {
    stiffness: 80, // Very low stiffness for smooth movement
    damping: 40, // Higher damping to prevent bouncing default - 100  
    mass: 2, // Added mass for more "weight" in movement default 40
    // restDelta: 0.001, // Small rest delta for smoother stop default 2
  });

  const y = useTransform(smoothY, (value) => value * -1);

  return (
    <Main>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transformStyle: "preserve-3d",
        }}
      >
        <SmoothScrollSection style={{ y }}>
          <HomeSectionOne />
          <Green />
          <GridDisplay />
          <Landingimg />
          <div style={{ backgroundColor: "#f1d371" }}>
            <HomeLandingSection1 />
            <Reels />
            <Community />
          </div>
        </SmoothScrollSection>
      </motion.div>

      {/* Invisible element to maintain scroll height */}
      <div style={{ height: "550vh" }} />
    </Main>
  );
}

export default Home;
