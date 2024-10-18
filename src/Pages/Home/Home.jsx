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

function Home() {
  return (
    <Main>
      <HomeSectionOne />
      <Green />
      <GridDisplay />
      <Landingimg />
      <div style={{ backgroundColor: "#f1d371" }}>
        <HomeLandingSection1 />
        <Reels />
        <Community />
      </div>
    </Main>
  );
}

export default Home;
