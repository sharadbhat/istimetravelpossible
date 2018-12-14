import React, { Component } from 'react';
import Heading from './Heading.js';
import NotYet from './NotYet.js';
import CurrentDate from './CurrentDate.js';
import Credit from './Credit.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <NotYet />
        <CurrentDate />
        <Credit />
      </div>
    );
  }
}

export default App;
