// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import random from 'lodash/random';
// Externals
import theme from '../../theme';

class Circuit extends Component {
  static propTypes = {
    xStart: PropTypes.number.isRequired,
    yStart: PropTypes.number.isRequired,
  };

  // Formula to calculate ending coordinates of a line:
  // (x2,y2) = (x1+l⋅cos(a), y1+l⋅sin(a))
  static calcEndingCoords = (xStart, yStart, distance, angle) => ([
    // x coordinate
    xStart + (distance * Math.cos(angle)),
    // y coordinate
    yStart + (distance * Math.sin(angle)),
  ]);

  constructor(props) {
    super(props);
    const { calcEndingCoords } = this.constructor;
    const distance = 40;
    const angle = 45;
    const [xStart2, yStart2] = calcEndingCoords(props.xStart, props.yStart, distance, angle);
    const [xStart3, yStart3] = calcEndingCoords(xStart2, yStart2, distance, angle);

    this.state = {
      angle,
      distance,
      xStart1: props.xStart,
      yStart1: props.yStart,
      xStart2,
      yStart2,
      xStart3,
      yStart3,
    };
  }

  render() {
    const { angle, distance, xStart1, yStart1, xStart2, yStart2, xStart3, yStart3 } = this.state;

    return (
      <Container>
        <Line x={xStart1} y={yStart1} distance={distance} angle={angle} />
        <Line x={xStart2} y={yStart2} distance={distance} angle={angle * 2} />
        <Line x={xStart3} y={yStart3} distance={distance} angle={angle / 2} />
      </Container>
    );
  }
}

const Line = styled.div`
  background: ${theme.colors.lightGrey};
  height: 2px;
  left: ${({ x }) => x}px;
  position: absolute;
  top: ${({ y }) => y}px;
  transform: rotate(${({ angle }) => angle}deg);
  width: ${({ distance }) => distance}px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default Circuit;
