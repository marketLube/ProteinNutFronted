import styled from "styled-components";

export const MainHeading = styled.div`
  font-family: "SUSE", "Kanit", "";
  font-size: 8rem;
  width: 80%;
  font-weight: 900;
  line-height: 11.2rem;
  letter-spacing: -0.5rem;
  margin: 0 auto;
  text-align: center;
  color: var(--font-gray);
  position: absolute;
  top: 13rem;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);
  padding-bottom: 20px; // Add bottom padding to create space for the subheading

  @media (max-width: 1200px) {
    font-size: 7rem;
    line-height: 9.2rem;
    letter-spacing: -0.4rem;
    top: 12rem;
    padding-bottom: 15px; // Adjust bottom padding for smaller screens
  }

  @media (max-width: 992px) {
    font-size: 5rem;
    line-height: 7.2rem;
    letter-spacing: -0.3rem;
    top: 10rem;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 5.2rem;
    letter-spacing: -0.2rem;
    top: 8rem;
    padding-bottom: 5px;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
    line-height: 3.7rem;
    letter-spacing: -0.1rem;
    top: 10rem;
    padding-bottom: 5px;
  }
`;

export const SubHeading = styled.div`
  font-family: "SUSE", "Kanit", "";
  font-size: 1.2rem;
  font-weight: normal;
  margin-top: 20px; // Increase top margin to create space below the main heading
  text-align: center;
  width:20rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
    margin-top: 15px;
  }

  @media (max-width: 992px) {
    font-size: 0.9rem;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  @media (max-width: 576px) {
    font-size: 0.7rem;
    margin-top: 5px;
  }
`;