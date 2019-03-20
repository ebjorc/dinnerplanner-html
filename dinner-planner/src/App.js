import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import HomeView from './Presentation/homeView';
import SelectDish from './selectDish';
import DinnerModel from './model'
import { DinnerOverview } from './Presentation/dinnerOverview';
import { DinnerPrintout } from './Presentation/dinnerPrintout';
import { DishDetailsView } from './Presentation/dishDetailsView';

class App extends Component {
  constructor() {
    super();
    this.model = new DinnerModel();
    this.state = {
      showHomeView: true,
      showSelectDish: false,
      showDinnerOverview: false,
      showDinnerPrintout: false,
      showDishDetailsView: false,
      menu: [],
      guests: 1,
      currentDish: ""
    }

    localStorage.clear();

    
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
    console.log(this.state.menu)
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
      <BrowserRouter>
      <div>
        <div id="DinnerTitle" className="bg-light text-center border-bottom border-dark">
          <h1> Dinner planner</h1>
        </div>
        {this.state.showHomeView ?<Route exact path="/" render={() => <HomeView createDinner={x=>this.setState({showHomeView:false, showSelectDish:true})}/>}/> : null}
        {this.state.showSelectDish ? <Route path="/search" render={() => <SelectDish menu={this.state.menu} addToMenu={dish=> this.addToMenu(dish)} confirmClicked={x=> this.state.menu.length == 0 ? true : this.setState({showSelectDish:false, showDinnerOverview:true})} model = {this.model} guests = {this.state.guests} setNumberOfGuests = {x => this.setGuests(x)}/>}/> : null}
        {this.state.showDinnerPrintout ? <Route path ="/printout" render={() => <DinnerPrintout menu={this.state.menu} guests={this.state.guests} backButtonPressed={x=>this.setState({showSelectDish:true, showDinnerPrintout:false})}/>}/>: null}
        {this.state.showDinnerOverview ? <Route path ="/overview" render={() => <DinnerOverview menu={this.state.menu} guests={this.state.guests} totalPrice={this.getTotalPrice()} backButtonPressed={x=>this.setState({showSelectDish:true, showDinnerOverview:false, })} confirmPressed={x=>this.setState({showDinnerOverview:false, showDinnerPrintout: true})} />}/>: null}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
