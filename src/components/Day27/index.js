import store from "./store";
import { Provider } from "react-redux";
import React from "react";
import ToDo from "./Todo";

function Day27() {
    return(
        <Provider store= {store}>
            <ToDo/>
        </Provider>
    )
}

export default Day27;