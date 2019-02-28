import React, { Component } from 'react';
import './App.css';
import { HomeView } from './Presentation/homeView';
import SelectDish from './selectDish';
import DinnerModel from './model'
import { DinnerOverview } from './Presentation/dinnerOverview';
import { DinnerPrintout } from './Presentation/dinnerPrintout';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.model = new DinnerModel();
    this.state = {
      showHomeView: true,
      showSelectDish: false,
      showDinnerOverview: false,
      showDinnerPrintout: false,
      menu: [],
      guests: 1,
    }

    //localStorage.clear();
    
    var menu = localStorage.getItem('menu');
    if(menu) {
      this.state.menu = JSON.parse(menu);
    }

    var guests = localStorage.getItem('guests');
    if(guests) {
      this.state.guests = JSON.parse(guests);
    }
  }

  addToMenu = function(dishToAdd) {
    var dishAlreadyAdded = false;
    var tempMenu = this.state.menu;
      tempMenu.forEach( (dish) => {
        if(dish.id == dishToAdd.id) {
          dishAlreadyAdded = true;
          return;
        }
      });
    if(dishAlreadyAdded) return;
    tempMenu.push(dishToAdd);
    localStorage.setItem('menu', JSON.stringify(this.state.menu));
    this.setState({menu: tempMenu});
  }

  setGuests = function(guests) {
    localStorage.setItem('guests', JSON.stringify(guests));
    this.setState({guests: guests});
  }

  getTotalPrice = function() {
    var totalPrice = 0;
    this.state.menu.forEach(dish => {
      dish.extendedIngredients.forEach(ingredient => {
        totalPrice += ingredient.amount;
      })
    })
    return totalPrice;
  }


  
  render() {
    return (
      <div>
        <div id="DinnerTitle" className="bg-light text-center border-bottom border-dark">
          <h1> Dinner planner</h1>
        </div>
        { <Route exact path="/" component = {this.state.showHomeView ? <HomeView  createDinner={x=>this.setState({showHomeView:false, showSelectDish:true})} /> : null} />}
        { this.state.showSelectDish ? <SelectDish menu={this.state.menu} addToMenu={dish=> this.addToMenu(dish)} confirmClicked={x=> this.state.menu.length == 0 ? true : this.setState({showHomeView:false, showSelectDish:false, showDinnerOverview:true})} model = {this.model} guests = {this.state.guests} setNumberOfGuests = {x => this.setGuests(x)}/> : null }
        { this.state.showDinnerPrintout ? <DinnerPrintout menu={this.state.menu} guests={this.state.guests} backButtonPressed={x=>this.setState({showHomeView:false, showSelectDish:true, showDinnerOverview:false, showDinnerPrintout:false})}/> : null}
        { this.state.showDinnerOverview ? <DinnerOverview menu={this.state.menu} guests={this.state.guests} totalPrice={this.getTotalPrice()} backButtonPressed={x=>this.setState({showHomeView:false, showSelectDish:true, showDinnerOverview:false, showDinnerPrintout: false})} confirmPressed={x=>this.setState({showHomeView:false, showSelectDish:false, showDinnerOverview:false, showDinnerPrintout: true})} /> : null}
      </div>
    );
  }
}

export default App;
