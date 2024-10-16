import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useObserver from "../../../Hooks/useObserver";
import { setIsHome } from "../../../App/generalSlice/generalSlice";
import { StyledSectionOne } from "../../../UI/HomeStyle/SectionOne";
import { MainHeading as StyledMainHeading } from "./StyledComponents/MainHeading"; // Import the original styled component
import { motion } from "framer-motion";
import BottomCircle from "./BottomCircle";
import { StyledCircleDummy } from "./Components/StyledCircleDummy";
import { Green } from "../HomeSectionTwo/Component.jsx/Green";
import styles from './HomeSectionOne.module.css'

// Convert MainHeading to a motion component
const  MainHeading = motion(StyledMainHeading);

function HomeSectionOne() {
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  useObserver(targetRef, (isVisible) => dispatch(setIsHome(isVisible)), 1);
  return (
    <StyledSectionOne ref={targetRef}>
      <MainHeading>
        <motion.div className={styles.headtag}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Boost your energy
        </motion.div>
        <motion.div className={styles.headtag}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.7 } }}
        >
          With Crunchy Energy
        </motion.div>
      </MainHeading>
      <BottomCircle></BottomCircle>
      <StyledCircleDummy />
    </StyledSectionOne>
  );
}

export default HomeSectionOne;
