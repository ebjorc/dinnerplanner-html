import { Link } from "react-router-dom";
import React from 'react';

const HomeView = ({createDinner}) => 
    <div id="homeView">
        <div id="textView" className="bg-white text-center">
            Welcome to Dinner Planner! 
            Please click the button below to start planning your dinner.
        </div>
        <div id="buttonView" className="text-center">
        <Link to="/search">
        <button id="createDinnerButton" className="btn btn-lg btn-warning" onClick={e=>createDinner()}>Create new dinner</button>
        </Link>
        </div>
    </div>



export default HomeView

