import React, { Component } from 'react';
import './App.css';
import { HomeView } from './Presentation/homeView';
import SelectDish from './selectDish';
import DinnerModel from './model'

class App extends Component {
  constructor() {
    super();
    this.model = new DinnerModel();
    this.state = {
      showHomeView: true,
      showSelectDish: false,
      menu: [],
      guests: 1,
    }
  }
  
  render() {
    return (
      <div>
        <div id="DinnerTitle" className="bg-light text-center border-bottom border-dark">
          <h1> Dinner planner</h1>
        </div>
        { this.state.showHomeView ? <HomeView  createDinner={x=>this.setState({showHomeView:false, showSelectDish:true})} /> : null }
        { this.state.showSelectDish ? <SelectDish confirmClicked={x=>this.setState({showHomeView:true, showSelectDish:false})} model = {this.model} guests = {this.state.guests} setNumberOfGuests = {x => this.setState({guests: x})}/> : null }
      </div>
    );
  }
}

export default App;
