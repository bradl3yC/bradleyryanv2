// Dependencies
import React, { Component } from 'react';
// Externals
import gitHub from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';
import reactIcon from '../../assets/images/react.svg';
// Internals
import {
  HeaderSubtext,
  HeaderText,
  Logo,
  LogoLink,
  Logos,
  NavBar,
  NavLink,
  ReactIcon,
  SectionOne,
  Title,
  Wrapper,
} from './styles';


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar>
          <Title>bradleyRyan</Title>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/">Home</NavLink>
        </NavBar>
        <SectionOne>
          <HeaderText>Bradley Ryan</HeaderText>
          <HeaderSubtext>Frontend Engineer</HeaderSubtext>
          <HeaderSubtext>Specialized in React.JS</HeaderSubtext>
          <ReactIcon alt="react" src={reactIcon} />
          <Logos>
            <LogoLink href="https://github.com/bradl3yC"><Logo alt="github" src={gitHub} /></LogoLink>
            <LogoLink href="https://www.linkedin.com/in/brad-conley/"><Logo alt="linkedin" src={linkedin} /></LogoLink>
          </Logos>
        </SectionOne>
      </Wrapper>
    );
  }
}

export default Home;
