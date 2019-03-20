import React, { Component } from 'react';
import './App.css';
import { SideBar } from './Presentation/sideBar';
import { SearchDishView } from './Presentation/searchDishView';
import { DishDetailsView } from './Presentation/dishDetailsView';
import {BrowserRouter, Route} from "react-router-dom";

class SelectDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showSearchView: true,
        showDetailsView: false,
        filterType: "All",
        filterKeyword: null,
        fetchingDishes: true,
        fetchingDishDetails: false,
        filterChanged: true,
        currentDish: null,
        dishes: [],
    }
    this.fetchDishes(false);
  }

  fetchDishDetails = function(id) {
    this.setState({fetchingDishDetails: true,showDetailsView: true, showSearchView: false});
    this.props.model.getDishDetails(id).then(dish => {
      this.setState({currentDish: dish, fetchingDishDetails: false});
    }).catch(error => {
      this.setState({fetchingDishDetails: false,showDetailsView: false, showSearchView: true})
      alert("Error! Please check your internet connection");
    });
  }

  getDishPrice = function(dish) {
    var totalPrice = 0;
      dish.extendedIngredients.forEach(function(ingredient) {
          totalPrice += ingredient.amount;
      });
      return parseFloat(totalPrice.toFixed(2),10);
  }

  setKeyword = function(newKeyword) {
    if(newKeyword != this.state.filterKeyword) {
      this.setState({filterKeyword: newKeyword, filterChanged: true})
    }
  }

  setType = function(newType) {
    if(newType != this.state.filterType) {
      this.setState({filterType: newType, filterChanged: true})
    }
  }

  fetchDishes = function(shouldSetState) {
    if(!this.state.filterChanged) return;
    if (shouldSetState) {
    this.setState({fetchingDishes: true})
    }
    this.props.model.getAllDishes(this.state.filterType, this.state.filterKeyword).then(dishes => {
      this.setState({fetchingDishes: false, dishes: dishes, filterChanged: false})
    }).catch(error => {
      this.setState({fetchingDishes: false})
      alert("Error! Please check your internet connection");
    });
  }

  updateMenuPrice = function(menu) {
    menu.forEach(dish=> {
      dish.totalPrice = this.getDishPrice(dish);
    })
    return menu;
  }

  getTotalMenuPrice = function() {
    var totalPrice = 0;
    this.props.menu.forEach(dish => {
      totalPrice += this.getDishPrice(dish);
    })
    return totalPrice;
  }

  // confirmClicked = function(){
  //   this.
  // }


  render() {
    return (
      <BrowserRouter>
      <div>
        <div id="rowView" className="row">
        <SideBar menu={this.updateMenuPrice(this.props.menu)} numberOfGuests={this.props.guests} setNumber={x => this.props.setNumberOfGuests(x)} confirmButtonClicked={x => this.props.confirmClicked()} totalMenuPrice={this.getTotalMenuPrice()} />
        {this.state.showSearchView ? <SearchDishView types={this.props.model.getDishTypes()} dishPressed={x=>this.fetchDishDetails(x)} dishes={this.state.dishes} fetchingData={this.state.fetchingDishes} searchPressed={x=>this.fetchDishes(true)} setType={x=> this.setType(x)} setKeyword={x=> this.setKeyword(x)}/> : null }
        {this.state.showDetailsView ? <Route path="/details" render={() => <DishDetailsView addClicked={x=> this.props.addToMenu(this.state.currentDish)} totalPrice={this.state.currentDish ? this.getDishPrice(this.state.currentDish): null} guestNumber={this.props.guests} fetchingDishDetails={this.state.fetchingDishDetails} dish={this.state.currentDish} backButtonClicked={x=>this.setState({showSearchView:true, showDetailsView:false})}/>}/>: null}
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default SelectDish;
