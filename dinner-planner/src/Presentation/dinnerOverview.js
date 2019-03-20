import React from 'react';

export const DinnerOverview = ({menu, totalPrice, guests, backButtonPressed, confirmPressed}) =>
    <div id="dinnerOverview" className="text-center">
        <div className="container">
            <div id="printoutHeader" className="row">
                <div className="col-lg-6">
                    <h2 id="numberOfGuests">{"My Dinner: " + guests + " guests"}</h2>
                </div>
                <div className="col-lg-6">
                    <button id = "dinnerOverviewBackButton" type="button" className="btn btn-warning" onClick={e=>backButtonPressed()}>go back and edit dinner</button>
                </div>
            </div>
        </div>

        <div>
            <div className="dishContainer">
                <div id="dishRowContainer" className="row justify-content-md-center">
                    {menu.map(dish => 
                        <div id="dinnerOverviewCell" className="col-lg-2 dishCell" key={dish.id}>
                            <div>
                                <img alt="" id="dishImage" src={'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg'}/>
                                <h6 id="dishName">{dish.title}</h6>
                            </div>
                            <h4 id="dishPrice">{dish.price}</h4>
                        </div>
                    )}
                    <div className="col-lg-1 leftBorder priceCell">
                        <div className="bottomAlign">
                            <h4>Total:</h4>
                            <h4 id="totalPrice"> {totalPrice * guests + " SEK"}</h4>
                        </div>
                    </div>
                </div>
                <div id="buttonView">
                    <button id = "dinnerOverviewPrintButton" type="button" className="btn btn-warning btn-lg" onClick={e=>confirmPressed()}>Print Full Recipe</button>
                </div>
            </div>
        </div>
    </div>