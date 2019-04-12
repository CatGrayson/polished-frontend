import React, { Component } from 'react';
import './App.css';
import PolishHeader from './Components/PolishHeader';
import PolishContainer from './Components/PolishContainer';
import { Route, Switch } from 'react-router-dom';
import PolishLogin from './Components/PolishLogin';

class App extends Component {

  state = {
    polishes: [],
    favorites: [],
    users: []
  }

  componentDidMount(){
    this.fetchPolishes()
    this.fetchUsers()
  }

  fetchPolishes = () => {
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`)
    .then(resp => resp.json())
    .then(polishes => this.setState({polishes}))
  }

  fetchUsers = () => {
    fetch(`http://localhost:3000/users`)
    .then(resp => resp.json())
    .then(users => this.setState({users}))
  }

  render() {
    return (
      <div className="App">
      <PolishHeader />
      <Switch>
      <Route path="/login" component={PolishLogin} users={this.state.users} />
      <Route path='/' component={PolishContainer}  polishes={this.state.polishes} />
      </Switch>
      </div>
    );
  }
}

export default App;
