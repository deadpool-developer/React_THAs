import React from "react";
import Menu from "./menu";
function day17(props) {
    return (
        <div className="main">
            <h2 className="heading">Calories Read Only</h2><hr></hr>
            <Menu title="Pizza" calories="450"/>
            <Menu title="Burger" calories="200"/>
            <Menu title="Ice cream" calories="650" />
            <Menu title="Fried Rice" calories="250" />
            <Menu title="Fries" calories="150" />
            <Menu title="Brownie" calories="630" />
            <Menu title="Cold Drink" calories="120" />
            <Menu title="Manchurian" calories="430" />

        </div>

    )
}

export default day17;
