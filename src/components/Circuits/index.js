// Dependencies
import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';
import map from 'lodash/map';
// Externals
import Circuit from '../Circuit';


class Circuits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circuits: [
        {
          id: uuidv4(),
          xEnd: 140,
          xStart: 40,
          yEnd: 50,
          yStart: 40,
        },
      ],
    };
  }

  render() {
    const { circuits } = this.state;

    return (
      <Wrapper>
        {map(circuits, (circuit) => (
          <Circuit
            key={circuit.id}
            xStart={circuit.xStart}
            yStart={circuit.yStart}
          />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

export default Circuits;
