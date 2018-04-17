// Dependencies
import React from 'react';
// Internals
import { Container, NavLink, LinksContainer, Title } from './styles';

const NavBar = () => (
  <Container>
    <Title>bradleyRyan</Title>
    <LinksContainer>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/">Home</NavLink>
    </LinksContainer>
  </Container>
);

export default NavBar;
