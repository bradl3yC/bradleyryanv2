import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1%;
`;

export const NavLink = styled(Link)`
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Title = styled.span`
  font-family: 'Inconsolata',monospace;
  color: #61afef;
  font-size: 2em;
`;
