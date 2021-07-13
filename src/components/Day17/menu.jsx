import "./day17.css";
import React from "react";

function Menu(props) {
    return (
            <div className="card">
                <h1 className="title">{props.title}</h1><br/>
                <h2 className="calories">Calories contain {props.calories}</h2>
            </div>
    );
}



export default Menu;
