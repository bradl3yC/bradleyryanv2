import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgb(50,50,50);
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;


export const ProjectsHeader = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const Project = styled.a`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  margin: 60px 20px;
  text-decoration: none;
  max-width: 50%;
`;

export const ProjectImage = styled.img`
  max-height: 50vh;
  height: auto;
  width: 100%;
`;

export const ProjectTitle = styled.h2`
  margin: 20px 0;
`;

export const ProjectDescription = styled.p`
`;
