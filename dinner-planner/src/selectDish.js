import React, { Component } from 'react';
import './App.css';
import { SideBar } from './Presentation/sideBar';
import { SearchDishView } from './Presentation/searchDishView';
import { DishDetailsView } from './Presentation/dishDetailsView';

class SelectDish extends Component {
  constructor(props) {
    super(props);
    this.fetchDishes(false);
    this.state = {
        showSearchView: true,
        showDetailsView: false,
        filterType: null,
        filterKeyword: null,
        fetchingDishes: true,
        filterChanged: true,
        currentDish: null,
        dishes: [],
    }
  }

  fetchDishes = function(shouldSetState) {
    if (shouldSetState) {
    this.setState({fetchingDishes: true})
    if(!this.state.filterChanged) return;
    }
    this.props.model.getAllDishes(this.filterType,this.filterKeyword).then(dishes => {
      this.setState({dishes: dishes});
      this.setState({fetchingDishes: false})
    }).catch(error => {
      this.setState({fetchingDishes: false})
      alert("Error! Please check your internet connection");
    });
  }

  setCurrentDish = function(id) {
    this.state.dishes.forEach(dish => {
        if(dish.id == id) {
            this.setState({currentDish: dish, showDetailsView: true, showSearchView: false});
        }
    });
  }

  render() {
    return (
      <div>
        <div id="rowView" className="row">
        <SideBar numberOfGuests={this.props.guests} setNumber={x => this.props.setNumberOfGuests(x)} confirmButtonClicked={x => this.props.confirmClicked()}/>
        { this.state.showSearchView ? <SearchDishView dishPressed={x=>this.setCurrentDish(x)} dishes={this.state.dishes} fetchingData={this.state.fetchingDishes} searchPressed={x=>this.fetchDishes(true)}/> : null }
        { this.state.showDetailsView ? <DishDetailsView  dish={this.state.currentDish} backButtonClicked={x=>this.setState({showSearchView:true, showDetailsView:false})}/> : null }
        </div>
      </div>
    );
  }
}

export default SelectDish;
