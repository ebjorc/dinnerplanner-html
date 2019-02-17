import React from 'react';


export const DishDetailsView = ({dish, backButtonClicked}) =>
    <div id="dishDetailsView" className="col-lg-10">
        <div className="loader"></div>
        <div id = "dishDetailsContainer">
            <div className="row">
                <div className="col-lg-6">
                    <h2 id="dishName">{dish.title}</h2>
                    <img id="dishImage" src={'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg'}/>
                    <p id="dishDescription">{dish.preparation}</p>
                    <button id = "backButton" type="button" className="btn btn-warning" onClick={e=>backButtonClicked()}>back to search</button>
                </div>
                <div id ="ingredientsTableView" className="col-lg-6">
                    <div id="Ingredients">
                        <h3 id="ingredientsHeader" className="text-center"></h3>

                        <table id="ingredientsTable" className="table table-borderless">
                         </table>
                        
                        <div>
                            <div className="row justify-content-md-center">
                                <div className="col-lg-6">
                                    <button id = "addToMenuButton" type="button" className="btn btn-warning">Add to menu</button>
                                </div>
                                <div className="col-lg-6">
                                    <h6 id="totalDishPrice"></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prep">
                <h2>Preparation</h2>
                <p id="preparation">
                </p> 
            </div>
        </div>
    </div>