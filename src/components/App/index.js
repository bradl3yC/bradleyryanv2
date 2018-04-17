// Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Internals
import Home from '../../screens/Home';
import Projects from '../../screens/Projects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
