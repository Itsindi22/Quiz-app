import React from "react";
import './Quiz.css'

const Quiz = () => {
    return (
        <div className="container">
        <h1> Quiz App</h1>
        <hr />
        <h2> Which device is requird for the internet conection?</h2>
        <ul>
            <li> Modern</li>
            <li>Router</li>
            <li> Lan Cable</li> 
            <li> Pen Drive</li> 

        </ul>
        <button> Next </button>
        <div className="index">1 of 5 question</div>
        </div>
    )
}
export default Quiz