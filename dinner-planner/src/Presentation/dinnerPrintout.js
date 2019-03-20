import React from 'react';
import { Link } from "react-router-dom";

export const DinnerPrintout = ({menu, guests,backButtonPressed}) =>
    <div id = "dinnerPrintoutView" className="contaier">
        <div className="text-center">
            <div className="contaier">
                <div id="printoutHeader" className="row">
                    <div className="col-lg-6">
                        <h2 id="numberOfGuests">{"My Dinner: " + guests + " guests"}</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                <Link to="/search">
                    <button id = "dinnerPrintoutBackButton" type="button" className="btn btn-warning" onClick={e=>backButtonPressed()}>go back and edit dinner</button>
                </Link>
                </div>
            </div>
        </div>
        {menu.map(dish=>
            <div id="dish-row" className="contaier, dishRowCellclassName" key={dish.id}>
                <div className="row">
                    <div id ="dish" className="col-lg-6">
                        <div className = "centered">
                            <img alt="" id="dishImage" src={'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg'}/>
                            <h5 id="dishName" className = "centered">{dish.title}</h5>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2>Preparation</h2>
                        <p id ="preparation">{dish.instructions}</p>
                    </div>
                </div>
          </div>
        )}
    </div>