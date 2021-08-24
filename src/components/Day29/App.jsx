import React from "react";
import Day29App from "./Day29_app";
import { Provider } from "react-redux";
import store from "./store";

const Day29=()=>
{
    return(
        <>
        
         <Provider store={store}>
             <Day29App/>
         </Provider>

        </>
    );
}
export default Day29;