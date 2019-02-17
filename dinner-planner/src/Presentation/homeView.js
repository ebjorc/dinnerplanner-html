import React from 'react';


export const HomeView = ({createDinner}) =>
    <div id="homeView">
        <div id="textView" className="bg-white text-center">
            Welcome to Dinner Planner! 
            Please click the button below to start planning your dinner.
        </div>
        <div id="buttonView" className="text-center">
        <button id="createDinnerButton" className="btn btn-lg btn-warning" onClick={e=>createDinner()}>Create new dinner</button>
        </div>
    </div>