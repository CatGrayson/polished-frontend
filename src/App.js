import React, { Component } from 'react';
import './App.css';
import PolishHeader from './Components/PolishHeader';
import PolishContainer from './Components/PolishContainer';
import { Route, Switch } from 'react-router-dom';
import PolishLogin from './Components/PolishLogin';

class App extends Component {

  state = {
    polishes: [1,2,3],
    favorites: [],
    users: []
    
  }

  componentDidMount(){
    this.fetchPolishes()
    //this.fetchUsers()
  }

  fetchPolishes = () => {
    console.log("fetch")
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish")
    .then(resp => resp.json())

    .then(data => this.setState({polishes : data}))

  }

    getPolishColours = () => {
      this.state.polishes.map((polish) => {
        polish.product_colors.forEach((product_colors) => {
          return product_colors.colour_name
        }  
      )}
    )}

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
      <Route path='/' render={(props)=> <PolishContainer {...props} polishes = {this.state.polishes}/>} />

      </Switch>
      </div>
    );
  }
}

export default App;
