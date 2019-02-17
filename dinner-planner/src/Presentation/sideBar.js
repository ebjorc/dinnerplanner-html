import React from 'react';


export const SideBar = ({numberOfGuests, setNumber,confirmButtonClicked}) =>
        <div id="sideBarView" className="col-md-2 col-12 border-right border-dark">
            <div id="sideBarHeader" className="row justify-content-around">
                <h3 className="col-md-8 col-10">My Dinner</h3>
                <div className="col-md-3 col-2">
                    <button id="collapseButton" type="button" className="btn btn-default">
                        <span id="barsIcon" className="fa fa-bars"></span>
                    </button>
                </div>
            </div>
            <div id = "collapseContainer">
                <div id="peopleScroller" className="row justify-content-start">
                    <h6 id="peopleHeader" className="col-md-6 col-4">People</h6>
                    <input id="guestsInput" type="number" className="col-md-4 col-3" min="1" max="99" value={numberOfGuests} size="2"
                 onChange={e=>setNumber(e.target.value)}></input>
                </div>
            </div>
            <div id="dishNameCostBar" className="row border-top border-bottom border-dark bg-light justify-content-around">
                <h6 id="dishNameText" className="col-md-8 col-10">Dish Name</h6>
                <h6 id="costText" className="col-md-3 col-2">Cost</h6>
            </div>
            <div id="sideBarItemDiv">

            </div>
            <div id="costCounter">
                <h6 id = "totalCostLabel"  className="text-right text-warning">0 SEK</h6>
            </div>
            <div  className="col text-center">
                <button id="confirmDinnerButton" type="button" className="btn btn-secondary btn-md border border-dark" onClick={e=>confirmButtonClicked()}>Confirm Dinner</button>
            </div>
        </div>