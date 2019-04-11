import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PolishHeader from './Components/PolishHeader.js'
import PolishContainer from './Components/PolishContainer.js'

class App extends Component {

  state = {
    polishContainer: []
  }

  render() {
    return (
      <div className="App">
      <PolishHeader />
      <PolishContainer />
      </div>
    );
  }
}

export default App;
