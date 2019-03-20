import React from 'react';
import { Link } from "react-router-dom";


export const SearchDishView = ({dishes, fetchingData, searchPressed, dishPressed, types, setType, setKeyword}) =>
    <div id="dishSearchView" className="col-md-10 col-12 bg-white">
        <div id="findDishView">
            <h3 id="findDishHeader">Find a dish</h3>
            <div id="searchbar" className="row border-bottom border-dark">
                <input id="keyWordsInput" className="form-control col-md-2 col-2" type="text" placeholder="Enter key words" onChange={e=>setKeyword(e.target.value)}/>
                <select id="categoryInput" className="form-control col-md-3 col-2" onChange={e=>setType(e.target.value)}>
                {types.map(type =>
                    <option key={type} value={type}>{type}</option>
                )}
                </select>
                <button id="searchDishButton" type="button" className="btn btn-warning col-md-1 col-3  border border-dark" onClick={e=>searchPressed()}>Search</button>
            </div>
        </div>
        {fetchingData ? <div className="loader"></div>  : null}
        
        <div id="dishItemScrollView"> 
        {dishes.map(dish=> 
            <div id="dishItemCellView" className="imgContainer" key={dish.id} >
                
                <Link to={"/details/" + dish.id}>
                <div className="imgContainer" onClick={e=>dishPressed(dish.id)}>
                    <img alt="" src = {'https://spoonacular.com/recipeImages/' + dish.id + '-312x231.jpg'} />
                    <p className='imgText'> {dish.title} </p> 
                </div>
                </Link>
            </div>
        )}
        </div>
        {(dishes.length == 0 && !fetchingData) ? <div id="onEmptyLabel" className="centered" >
            <h3>No Results Found</h3>
        </div> : null}
        
    </div>