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

export const Projects = styled.div`
  align-items: center;
  background: #61dafb;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  text-align: center;
  width: 100%;

  @media (min-width: 700px) {
    margin-bottom: 100px;
  }
`;

export const ProjectsHeader = styled.h1`
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 100px;
`;

export const Project = styled.a`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  margin: 100px 20px;
  text-decoration: none;
  max-width: 100%;
`;

export const ProjectImage = styled.img`
  max-height: 50px;
`;

export const ProjectTitle = styled.h2`
  margin: 20px 0;
`;

export const ProjectDescription = styled.p`
`;

export const Wrapper = styled.div`
  background: linear-gradient(0, #ffffff 0%, #ffffff 40%, #61dafb 60%, #61dafb 100%);
  display: flex;
  flex-direction: column;
  width: 100%;
`;
