import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DinnerModel from '../model';


class DishDetailsView extends Component {
    constructor({guestNumber, addClicked, setCurrentDish}) {
        super({guestNumber, addClicked, setCurrentDish})

        this.state = {
            dish: null,
            fetchingDishDetails:true,
        }

        this.guestNumber = guestNumber;
        this.addClicked = addClicked;

        console.log(guestNumber);

        this.id = parseInt(window.location.pathname.substring(9));
        this.model = new DinnerModel();
        this.model.getDishDetails(this.id).then(currentDish => {
        this.setState({dish: currentDish, fetchingDishDetails: false});
        setCurrentDish(currentDish);
        }).catch(error => {
            this.setState({fetchingDishDetails: false})
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

    

    render() {
        return (<div id="dishDetailsView" className="col-lg-10">
        { this.state.fetchingDishDetails ? <div className="loader"></div> : null}
        <div id = "dishDetailsContainer">
            <div className="row">
                <div className="col-lg-6">
                    <h2 id="dishName">{(this.state.dish && !this.state.fetchingDishDetails) ? this.state.dish.title : ""}</h2>
                    <img alt="" id="dishImage" src={(this.state.dish && !this.state.fetchingDishDetails) ? 'https://spoonacular.com/recipeImages/' + this.state.dish.id + '-312x231.jpg' : ""}/>
                    <p id="dishDescription"></p>
                    <Link to="/search">
                    <button id = "backButton" type="button" className="btn btn-warning">back to search</button>
                    </Link>
                </div>
                {(this.state.dish && !this.state.fetchingDishDetails)  ? <div id ="ingredientsTableView" className="col-lg-6">
                    <div id="Ingredients">
                        <h3 id="ingredientsHeader" className="text-center">{"Ingredients for " + this.guestNumber + " people"}</h3>
                        <table id="ingredientsTable" className="table table-borderless">
                        <tbody>
                        { (this.state.dish && !this.state.fetchingDishDetails) ? this.state.dish.extendedIngredients.map(ingredient =>
                            <tr key={ingredient.id}><td> { ingredient.amount.toFixed(2) * this.guestNumber + " " + ingredient.measures.metric.unitShort   }</td><td>{ingredient.name }</td><td>SEK</td><td>{ + ingredient.amount.toFixed(2) * this.guestNumber}</td></tr>
                        ) : null}
                        </tbody>
                        </table>
                        <div>
                            <div className="row justify-content-md-center">
                                <div className="col-lg-6">
                                    <button id = "addToMenuButton" type="button" className="btn btn-warning" onClick={e=> this.addClicked() }>Add to menu</button>
                                </div>
                                <div className="col-lg-6">
                                    <h6 id="totalDishPrice">{(this.state.dish && !this.state.fetchingDishDetails) ? "SEK " +  this.getDishPrice(this.state.dish) * this.guestNumber : ""}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null }
            </div>
            {(this.state.dish && !this.state.fetchingDishDetails) ? <div className="prep">
                <h2>Preparation</h2>
                <p id="preparation"> {(this.state.dish && !this.state.fetchingDishDetails) ? this.state.dish.instructions : ""}</p> 
            </div> : null}
        </div>
    </div>
            )
        }
};

export default DishDetailsView;
    