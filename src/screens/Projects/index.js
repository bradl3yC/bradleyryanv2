// Dependencies
import React from 'react';
import map from 'lodash/map';
// Externals
import NavBar from '../../components/NavBar';
import projects from '../../assets/projects';
// Internals
import {
  Project,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
  ProjectsHeader,
  Wrapper,
} from './styles';


const Projects = () => (
  <Wrapper>
    <NavBar />
    <ProjectsHeader>{'< My Projects />'}</ProjectsHeader>
    {map(projects, (project) => (
      <Project key={project.id} href={project.link}>
        <ProjectImage alt={project.name} src={project.image} />
        <ProjectTitle>{`< ${project.name} />`}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </Project>
          ))}
  </Wrapper>
);

export default Projects;
