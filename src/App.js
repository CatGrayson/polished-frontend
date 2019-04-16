import React, { Component } from 'react';
import './App.css';
import PolishHeader from './Components/PolishHeader';
import PolishContainer from './Components/PolishContainer';
import { Route, Switch } from 'react-router-dom';
import PolishLogin from './Components/PolishLogin';
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class App extends Component {

  state = {
    polishes: [],
    favorites: [],
    users: [],
    search: ''
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

  handleSearch = (e, {value}) => {
    this.setState({
      search: value
    })
  }

  filteredPolishes(){
    let searched = this.state.search
    let filteredPolishes = this.state.polishes.filter(polish => {
      return polish.brand.toLowerCase().includes(searched)
    })
    return filteredPolishes
  }

  handleLike = (polish) => {
    let newLike = this.state.polishes.map(statePolish => statePolish === polish ? {...polish, rating: ++polish.rating}: statePolish)
    this.setState({
      polishes: newLike
    })
  }

  handleAdd = (polish) => {
    const name = polish.name
    const brand = polish.brand
    const image = polish.image_link
    const rating = polish.rating
    const price = polish.price

    const newPolish = {
      name: name,
      brand_name: brand,
      image_link: image,
      rating: rating,
      price: price
    }

    fetch('http://localhost:3000/nail_polishes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newPolish)
      }).then(resp =>{
      if(resp.ok){
        this.setState({
          favorites: [...this.state.favorites, polish]
        })
      }
    })
    
  }

  render() {

    return (
      <div className="App">
      <PolishHeader />
      <br/>
      <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} placeholder="Search by Brand"/>
      <Switch>
      <Route path="/login" component={PolishLogin} users={this.state.users} />
      <Route path='/' render={(props)=> <PolishContainer {...props} polishes = {this.filteredPolishes()} 
        handleLike={this.handleLike} handleAdd={this.handleAdd} favorites={this.state.favorites} />} />      
      </Switch>
      </div>
    );
  }
}

export default App;
