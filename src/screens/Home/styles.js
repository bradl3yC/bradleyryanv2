// Dependencies
import styled, { keyframes } from 'styled-components';


export const HeaderText = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  margin: 0 0 20px;
  z-index: 1;
`;

export const HeaderSubtext = styled.p`
  color: #fafafa;
  font-size: 1.1rem;
  z-index: 1;
`;

export const Logos = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  width: 100px;
  z-index: 1;
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
`;

export const ReactIcon = styled.img`
  animation: ${rotate} 6s infinite;
  background: transparent;
  margin-top: 20px;
  max-height: 100px;
  width: fit-content;
`;

export const LogoLink = styled.a``;

export const Logo = styled.img`
  height: 35px;
  width: 35px;
`;

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SectionOne = Section.extend`
  height: 100vh;
`;

export const SectionTwo = Section.extend`
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

