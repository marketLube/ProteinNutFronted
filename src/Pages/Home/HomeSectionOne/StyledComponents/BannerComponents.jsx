import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: absolute;
  top: 40%;
  font-size: 2.3rem;
  display: flex;
  margin-top: 2rem;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    font-size: 2rem;
    top: 45%;
  }

  @media (max-width: 992px) {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    top: 20%;
  }

  @media (max-width: 576px) {
    top:25%;
    font-size: 1.8rem;
    margin-top: 1rem;
  }
`;

export const BannerText = styled.p`
  margin: 0;
  text-align: center;
  max-width: 80%;

  @media (max-width: 992px) {
    max-width: 90%;
  }

  @media (max-width: 576px) {
    max-width: 95%;
  }
`;

export const ShopNowButton = styled.button`
  background-color: #4a8f3c;
  border: none;
  padding: 2rem 4rem;
  font-size: 2.5rem;
  color: white;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a7f2c;
  }

  @media (max-width: 1200px) {
    font-size: 2.2rem;
    padding: 1.8rem 3.5rem;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
    padding: 1.5rem 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 1.2rem 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    padding: 2rem 4rem;
    border-radius: 4rem;
  }
`;

export const ButtonContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;
