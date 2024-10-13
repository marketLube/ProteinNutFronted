import styled from "styled-components";

// Main Heading
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

  h1 {
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }
`;
