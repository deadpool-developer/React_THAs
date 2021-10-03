import React from "react";
import App from "./Day34";
import { Provider } from "react-redux";
import store from "./store";

const Day34 = () => {
    return (
      
      <Provider store={store}>
        <App />
      </Provider>
   
    )
}

export default Day34;