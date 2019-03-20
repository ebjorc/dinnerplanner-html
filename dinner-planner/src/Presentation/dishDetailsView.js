import React from 'react';
import { Link } from "react-router-dom";


export const DishDetailsView = ({dish, backButtonClicked, fetchingDishDetails, guestNumber, totalPrice, addClicked}) =>
    <div id="dishDetailsView" className="col-lg-10">
        { fetchingDishDetails ? <div className="loader"></div> : null}
        <div id = "dishDetailsContainer">
            <div className="row">
                <div className="col-lg-6">
                    <h2 id="dishName">{(dish && !fetchingDishDetails) ? dish.title : ""}</h2>
                    <img alt="" id="dishImage" src={(dish && !fetchingDishDetails) ? 'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg' : ""}/>
                    <p id="dishDescription"></p>
                    <Link to="/search">
                    <button id = "backButton" type="button" className="btn btn-warning" onClick={e=>backButtonClicked()}>back to search</button>
                    </Link>
                </div>
                {(dish && !fetchingDishDetails) ? <div id ="ingredientsTableView" className="col-lg-6">
                    <div id="Ingredients">
                        <h3 id="ingredientsHeader" className="text-center">{"Ingredients for " + guestNumber + " people"}</h3>
                        <table id="ingredientsTable" className="table table-borderless">
                        <tbody>
                        { (dish && !fetchingDishDetails) ? dish.extendedIngredients.map(ingredient =>
                            <tr key={ingredient.id}><td> { ingredient.amount.toFixed(2) * guestNumber + " " + ingredient.measures.metric.unitShort   }</td><td>{ingredient.name }</td><td>SEK</td><td>{ + ingredient.amount.toFixed(2) * guestNumber}</td></tr>
                        ) : null}
                        </tbody>
                         </table>
                        <div>
                            <div className="row justify-content-md-center">
                                <div className="col-lg-6">
                                    <button id = "addToMenuButton" type="button" className="btn btn-warning" onClick={e=> addClicked() }>Add to menu</button>
                                </div>
                                <div className="col-lg-6">
                                    <h6 id="totalDishPrice">{(dish && !fetchingDishDetails) ? "SEK " +  totalPrice * guestNumber : ""}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div> : null }
            </div>
            {(dish && !fetchingDishDetails) ? <div className="prep">
                <h2>Preparation</h2>
                <p id="preparation"> {(dish && !fetchingDishDetails) ? dish.instructions : ""}</p> 
            </div> : null}
        </div>
    </div>