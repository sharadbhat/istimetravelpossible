import React, { Component } from 'react';
import Heading from './Heading.jsx';
import NotYet from './NotYet.jsx';
import CurrentDate from './CurrentDate.jsx';
import Credit from './Credit.jsx';
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
