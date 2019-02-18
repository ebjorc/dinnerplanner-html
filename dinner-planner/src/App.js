import React, { Component } from 'react';
import './App.css';
import { HomeView } from './Presentation/homeView';
import SelectDish from './selectDish';
import DinnerModel from './model'
import { DinnerOverview } from './Presentation/dinnerOverview';
import { DinnerPrintout } from './Presentation/dinnerPrintout';

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
    this.setState({menu: tempMenu});
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
        { this.state.showHomeView ? <HomeView  createDinner={x=>this.setState({showHomeView:false, showSelectDish:true})} /> : null }
        { this.state.showSelectDish ? <SelectDish menu={this.state.menu} addToMenu={dish=> this.addToMenu(dish)} confirmClicked={x=> this.state.menu.length == 0 ? true : this.setState({showHomeView:false, showSelectDish:false, showDinnerOverview:true})} model = {this.model} guests = {this.state.guests} setNumberOfGuests = {x => this.setState({guests: x})}/> : null }
        {this.state.showDinnerPrintout ? <DinnerPrintout menu={this.state.menu} guests={this.state.guests} backButtonPressed={x=>this.setState({showHomeView:false, showSelectDish:true, showDinnerOverview:false, showDinnerPrintout:false})}/> : null}
        { this.state.showDinnerOverview ? <DinnerOverview menu={this.state.menu} guests={this.state.guests} totalPrice={this.getTotalPrice()} backButtonPressed={x=>this.setState({showHomeView:false, showSelectDish:true, showDinnerOverview:false, showDinnerPrintout: false})} confirmPressed={x=>this.setState({showHomeView:false, showSelectDish:false, showDinnerOverview:false, showDinnerPrintout: true})} /> : null}
      </div>
    );
  }
}

export default App;
