import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PolishHeader from './Components/PolishHeader'
import PolishContainer from './Components/PolishContainer'

class App extends Component {

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
