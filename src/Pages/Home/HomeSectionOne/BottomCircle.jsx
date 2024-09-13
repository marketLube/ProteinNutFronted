import React, { useEffect, useRef, useState } from "react";
import { StyledCircle } from "./StyledComponents/StyledCircle";

const colors = [
  "linear-gradient(45deg, #ffd45f, #f8c7a1)",
  "linear-gradient(45deg, #ff9a9e, #f8cdd1)",
  "linear-gradient(45deg, #e2a4b6, #f5b6b0)",
  "linear-gradient(45deg, #a2c2e3, #c2e0c2)",
  "linear-gradient(45deg, #fcb045, #fda085)",
  "linear-gradient(45deg, #8ec8a4, #c5e1a7)",
];

function BottomCircle() {
  const index = useRef(0); // To track the current index in the colors array
  const prevColor = useRef(colors[colors.length - 1]); // Start with the last color
  const curColor = useRef(colors[0]); // Initially set to the first color
  const [circle, setCircle] = useState(false); // State for circle animation toggle

  useEffect(() => {
    const interval = setInterval(() => {
      setCircle((prev) => !prev);

      if (index.current === colors.length) {
        index.current = 0;
      } else {
        index.current += 1;
      }
    }, 5000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    if (index.current === colors.length) {
    }
    curColor.current = colors[index.current];
    prevColor.current = colors[index.current - 1];
  }, [index.current]);

  console.log(index.current);
  console.log(prevColor.current, curColor.current);
  return (
    <StyledCircle
      $curColor={curColor.current} // Pass current color reference
      $circle={circle} // Pass circle state for animation
      $prevColor={prevColor.current} // Pass previous color reference
    />
  );
}

export default BottomCircle;
