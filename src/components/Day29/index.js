import React from "react";
import Day29 from "./App";
import store from "./store";
import { Provider } from "react-redux";

function WeatherDay29() {
    return(
        <Provider store = {store}>
            <Day29/>
        </Provider>
    )
}
 
export default WeatherDay29;