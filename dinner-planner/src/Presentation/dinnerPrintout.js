import React from 'react';


export const DinnerPrintout = ({menu, guests,backButtonPressed}) =>
    <div id = "dinnerPrintoutView" class="contaier">
        <div class="text-center">
            <div class="contaier">
                <div id="printoutHeader" class="row">
                    <div class="col-lg-6">
                        <h2 id="numberOfGuests">{"My Dinner: " + guests + " guests"}</h2>
                    </div>
                </div>
                <div class="col-lg-6">
                    <button id = "dinnerPrintoutBackButton" type="button" class="btn btn-warning" onClick={e=>backButtonPressed()}>go back and edit dinner</button>
                </div>
            </div>
        </div>
        {menu.map(dish=>
            <div id="dish-row" class="contaier, dishRowCellClass" key={dish.id}>
                <div class="row">
                    <div id ="dish" class="col-lg-6">
                        <div class = "centered">
                            <img alt="" id="dishImage" src={'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg'}/>
                            <h5 id="dishName" class = "centered">{dish.title}</h5>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h2>Preparation</h2>
                        <p id ="preparation">{dish.instructions}</p>
                    </div>
                </div>
          </div>
        )}
    </div>