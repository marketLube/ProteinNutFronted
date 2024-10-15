import styled, { keyframes } from "styled-components";

// Main Heading
export const MainHeading = styled.h1`
  font-family: "SUSE", "Kanit", "";
  font-size: 11rem;
  width: 80%;
  font-weight: 900;
  line-height: 11.2rem;
  letter-spacing: -0.5rem;
  margin: 0 auto;
  text-align: center;
  color: var(--font-gray);
  position: absolute;
  top: 13rem;
  text-wrap: nowrap;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    font-size: 7rem;
    line-height: 9.2rem;
    letter-spacing: -0.4rem;
    top: 12rem;
  }

  @media (max-width: 992px) {
    font-size: 5rem;
    line-height: 7.2rem;
    letter-spacing: -0.3rem;
    top: 10rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 5.2rem;
    letter-spacing: -0.2rem;
    top: 8rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
    line-height: 3.7rem;
    letter-spacing: -0.1rem;
    top: 6rem;
  }
`;
